import { eq, desc, and, inArray } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser,
  users,
  investors,
  projects,
  capitalStacks,
  projectInvestors,
  projectUpdates,
  investorContacts,
  documents,
  auditLogs,
  type Investor,
  type Project,
  type CapitalStack,
  type ProjectInvestor,
  type ProjectUpdate,
  type InvestorContact,
  type Document,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * PROJECT QUERIES
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(projects).where(eq(projects.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getProjectById(id: number): Promise<Project | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function listProjects(filters?: {
  status?: string;
  type?: string;
  limit?: number;
  offset?: number;
}): Promise<Project[]> {
  const db = await getDb();
  if (!db) return [];

  let query: any = db.select().from(projects);

  if (filters?.status) {
    query = query.where(eq(projects.projectStatus, filters.status as any));
  }
  if (filters?.type) {
    query = query.where(eq(projects.projectType, filters.type as any));
  }

  query = query.orderBy(desc(projects.createdAt));

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }
  if (filters?.offset) {
    query = query.offset(filters.offset);
  }

  return await query;
}

/**
 * INVESTOR QUERIES
 */
export async function getInvestorById(id: number): Promise<Investor | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(investors).where(eq(investors.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function listInvestors(filters?: {
  stage?: string;
  entityType?: string;
  limit?: number;
  offset?: number;
}): Promise<Investor[]> {
  const db = await getDb();
  if (!db) return [];

  let query: any = db.select().from(investors).where(eq(investors.isActive, true));

  if (filters?.stage) {
    query = query.where(eq(investors.investmentStage, filters.stage as any));
  }
  if (filters?.entityType) {
    query = query.where(eq(investors.entityType, filters.entityType as any));
  }

  query = query.orderBy(desc(investors.createdAt));

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }
  if (filters?.offset) {
    query = query.offset(filters.offset);
  }

  return await query;
}

/**
 * CAPITAL STACK QUERIES
 */
export async function getCapitalStacksByProjectId(projectId: number): Promise<CapitalStack[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(capitalStacks)
    .where(eq(capitalStacks.projectId, projectId))
    .orderBy(capitalStacks.layerOrder);
}

export async function getCapitalStackById(id: number): Promise<CapitalStack | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(capitalStacks).where(eq(capitalStacks.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * PROJECT INVESTOR QUERIES
 */
export async function getProjectInvestorsByProjectId(projectId: number): Promise<ProjectInvestor[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(projectInvestors)
    .where(eq(projectInvestors.projectId, projectId))
    .orderBy(desc(projectInvestors.createdAt));
}

export async function getProjectInvestorsByInvestorId(investorId: number): Promise<ProjectInvestor[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(projectInvestors)
    .where(eq(projectInvestors.investorId, investorId))
    .orderBy(desc(projectInvestors.createdAt));
}

/**
 * PROJECT UPDATES (Real-time)
 */
export async function getProjectUpdatesByProjectId(
  projectId: number,
  limit: number = 50
): Promise<ProjectUpdate[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(projectUpdates)
    .where(eq(projectUpdates.projectId, projectId))
    .orderBy(desc(projectUpdates.createdAt))
    .limit(limit);
}

export async function getRecentProjectUpdates(limit: number = 20): Promise<ProjectUpdate[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(projectUpdates)
    .where(eq(projectUpdates.isPublic, true))
    .orderBy(desc(projectUpdates.createdAt))
    .limit(limit);
}

/**
 * INVESTOR CONTACT QUERIES
 */
export async function getInvestorContactById(id: number): Promise<InvestorContact | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(investorContacts)
    .where(eq(investorContacts.id, id))
    .limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function listInvestorContacts(filters?: {
  status?: string;
  limit?: number;
  offset?: number;
}): Promise<InvestorContact[]> {
  const db = await getDb();
  if (!db) return [];

  let query: any = db.select().from(investorContacts);

  if (filters?.status) {
    query = query.where(eq(investorContacts.status, filters.status as any));
  }

  query = query.orderBy(desc(investorContacts.createdAt));

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }
  if (filters?.offset) {
    query = query.offset(filters.offset);
  }

  return await query;
}

/**
 * DOCUMENT QUERIES
 */
export async function getDocumentsByProjectId(projectId: number): Promise<Document[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(documents)
    .where(eq(documents.projectId, projectId))
    .orderBy(desc(documents.createdAt));
}

export async function getDocumentById(id: number): Promise<Document | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(documents).where(eq(documents.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * AUDIT LOG QUERIES
 */
export async function logAuditEvent(
  userId: number | undefined,
  action: string,
  entityType: string,
  entityId: number,
  oldValues?: any,
  newValues?: any,
  ipAddress?: string,
  userAgent?: string
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    await db.insert(auditLogs).values({
      userId,
      action,
      entityType,
      entityId,
      oldValues,
      newValues,
      ipAddress,
      userAgent,
    });
  } catch (error) {
    console.error("[Database] Failed to log audit event:", error);
  }
}
