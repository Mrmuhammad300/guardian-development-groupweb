import {
  int,
  mysqlEnum,
  mysqlTable,
  text,
  timestamp,
  varchar,
  decimal,
  boolean,
  json,
  index,
  foreignKey,
  unique,
} from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * INVESTORS TABLE
 * Institutional investors, family offices, and accredited parties
 * Supports SPVs, JVs, and partnership structures
 */
export const investors = mysqlTable(
  "investors",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("userId"),
    name: varchar("name", { length: 255 }).notNull(),
    entityType: mysqlEnum("entityType", [
      "individual",
      "family_office",
      "institutional",
      "spv",
      "jv",
      "partnership",
      "corporation",
    ]).notNull(),
    email: varchar("email", { length: 320 }).notNull(),
    phone: varchar("phone", { length: 20 }),
    
    // Organization details
    organizationName: varchar("organizationName", { length: 255 }),
    website: varchar("website", { length: 255 }),
    
    // Investment profile
    investmentStage: mysqlEnum("investmentStage", [
      "pre_qualification",
      "qualified",
      "active",
      "portfolio",
      "exited",
    ]).default("pre_qualification").notNull(),
    accreditationStatus: mysqlEnum("accreditationStatus", [
      "pending",
      "verified",
      "expired",
    ]).default("pending").notNull(),
    
    // Capital capacity
    minimumInvestment: decimal("minimumInvestment", { precision: 18, scale: 2 }),
    maximumInvestment: decimal("maximumInvestment", { precision: 18, scale: 2 }),
    totalDeployed: decimal("totalDeployed", { precision: 18, scale: 2 }).default("0"),
    
    // Preferences & focus
    focusSectors: json("focusSectors").$type<string[]>(),
    geographicFocus: json("geographicFocus").$type<string[]>(),
    investmentHorizon: varchar("investmentHorizon", { length: 50 }),
    
    // Metadata
    notes: text("notes"),
    isActive: boolean("isActive").default(true).notNull(),
    lastContactedAt: timestamp("lastContactedAt"),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("investors_userId_idx").on(table.userId),
    emailIdx: index("investors_email_idx").on(table.email),
    investmentStageIdx: index("investors_investmentStage_idx").on(table.investmentStage),
    entityTypeIdx: index("investors_entityType_idx").on(table.entityType),
  })
);

export type Investor = typeof investors.$inferSelect;
export type InsertInvestor = typeof investors.$inferInsert;

/**
 * PROJECTS TABLE
 * Development projects across sectors (mixed-use, industrial, energy, etc.)
 */
export const projects = mysqlTable(
  "projects",
  {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    
    // Project classification
    projectType: mysqlEnum("projectType", [
      "mixed_use",
      "industrial",
      "residential",
      "commercial",
      "energy",
      "infrastructure",
      "public_private",
      "other",
    ]).notNull(),
    
    // Location & geography
    location: varchar("location", { length: 255 }).notNull(),
    city: varchar("city", { length: 100 }).notNull(),
    state: varchar("state", { length: 50 }).notNull(),
    country: varchar("country", { length: 100 }).default("USA").notNull(),
    coordinates: json("coordinates").$type<{ lat: number; lng: number }>(),
    
    // Project scope
    description: text("description"),
    scope: text("scope"),
    totalUnits: int("totalUnits"),
    totalSqft: decimal("totalSqft", { precision: 15, scale: 2 }),
    
    // Timeline
    projectStatus: mysqlEnum("projectStatus", [
      "planning",
      "entitlement",
      "construction",
      "stabilized",
      "exited",
      "on_hold",
    ]).default("planning").notNull(),
    startDate: timestamp("startDate"),
    completionDate: timestamp("completionDate"),
    expectedCompletion: timestamp("expectedCompletion"),
    
    // Financial metrics
    totalProjectCost: decimal("totalProjectCost", { precision: 18, scale: 2 }),
    capitalDeployed: decimal("capitalDeployed", { precision: 18, scale: 2 }).default("0"),
    projectedReturn: decimal("projectedReturn", { precision: 6, scale: 2 }),
    actualReturn: decimal("actualReturn", { precision: 6, scale: 2 }),
    
    // Operational metrics
    occupancyRate: decimal("occupancyRate", { precision: 5, scale: 2 }),
    noi: decimal("noi", { precision: 18, scale: 2 }),
    
    // Sustainability & innovation
    sustainabilityFeatures: json("sustainabilityFeatures").$type<string[]>(),
    innovationTechnologies: json("innovationTechnologies").$type<string[]>(),
    
    // Metadata
    imageUrl: varchar("imageUrl", { length: 500 }),
    documentationUrl: varchar("documentationUrl", { length: 500 }),
    notes: text("notes"),
    isPublic: boolean("isPublic").default(false).notNull(),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    slugIdx: index("projects_slug_idx").on(table.slug),
    projectStatusIdx: index("projects_projectStatus_idx").on(table.projectStatus),
    projectTypeIdx: index("projects_projectType_idx").on(table.projectType),
    cityStateIdx: index("projects_cityState_idx").on(table.city, table.state),
  })
);

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;

/**
 * CAPITAL STACKS TABLE
 * Detailed capital structure for each project
 */
export const capitalStacks = mysqlTable(
  "capitalStacks",
  {
    id: int("id").autoincrement().primaryKey(),
    projectId: int("projectId").notNull(),
    
    // Stack layer identification
    layerName: varchar("layerName", { length: 255 }).notNull(),
    layerType: mysqlEnum("layerType", [
      "senior_debt",
      "mezzanine_debt",
      "equity",
      "preferred_equity",
      "tax_credits",
      "grants",
      "alternative_financing",
      "other",
    ]).notNull(),
    layerOrder: int("layerOrder").notNull(),
    
    // Capital details
    amount: decimal("amount", { precision: 18, scale: 2 }).notNull(),
    percentage: decimal("percentage", { precision: 6, scale: 2 }).notNull(),
    
    // Financing terms
    interestRate: decimal("interestRate", { precision: 6, scale: 3 }),
    term: int("term"),
    maturityDate: timestamp("maturityDate"),
    
    // Return structure
    expectedReturn: decimal("expectedReturn", { precision: 6, scale: 2 }),
    returnType: mysqlEnum("returnType", [
      "fixed",
      "variable",
      "equity_kicker",
      "performance_based",
    ]),
    
    // Investor & source
    sourceInvestorId: int("sourceInvestorId"),
    sourceDescription: varchar("sourceDescription", { length: 255 }),
    
    // Status & tracking
    fundingStatus: mysqlEnum("fundingStatus", [
      "committed",
      "funded",
      "partially_funded",
      "pending",
    ]).default("pending").notNull(),
    fundedAmount: decimal("fundedAmount", { precision: 18, scale: 2 }).default("0"),
    fundedDate: timestamp("fundedDate"),
    
    // Covenants & conditions
    covenants: json("covenants").$type<string[]>(),
    conditions: json("conditions").$type<string[]>(),
    
    // Metadata
    notes: text("notes"),
    documentationUrl: varchar("documentationUrl", { length: 500 }),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    projectIdIdx: index("capitalStacks_projectId_idx").on(table.projectId),
    layerTypeIdx: index("capitalStacks_layerType_idx").on(table.layerType),
    sourceInvestorIdIdx: index("capitalStacks_sourceInvestorId_idx").on(table.sourceInvestorId),
    fundingStatusIdx: index("capitalStacks_fundingStatus_idx").on(table.fundingStatus),
    fk_project: foreignKey({
      columns: [table.projectId],
      foreignColumns: [projects.id],
    }).onDelete("cascade"),
  })
);

export type CapitalStack = typeof capitalStacks.$inferSelect;
export type InsertCapitalStack = typeof capitalStacks.$inferInsert;

/**
 * PROJECT INVESTORS (Junction Table)
 * Maps investors to projects with their investment details
 */
export const projectInvestors = mysqlTable(
  "projectInvestors",
  {
    id: int("id").autoincrement().primaryKey(),
    projectId: int("projectId").notNull(),
    investorId: int("investorId").notNull(),
    
    // Investment details
    investmentAmount: decimal("investmentAmount", { precision: 18, scale: 2 }).notNull(),
    investmentDate: timestamp("investmentDate").defaultNow().notNull(),
    
    // Status
    status: mysqlEnum("status", [
      "interested",
      "committed",
      "funded",
      "exited",
      "withdrawn",
    ]).default("interested").notNull(),
    
    // Terms
    returnPercentage: decimal("returnPercentage", { precision: 6, scale: 2 }),
    exitDate: timestamp("exitDate"),
    actualReturn: decimal("actualReturn", { precision: 18, scale: 2 }),
    
    // Metadata
    notes: text("notes"),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    projectIdIdx: index("projectInvestors_projectId_idx").on(table.projectId),
    investorIdIdx: index("projectInvestors_investorId_idx").on(table.investorId),
    statusIdx: index("projectInvestors_status_idx").on(table.status),
    unique_project_investor: unique("unique_project_investor").on(table.projectId, table.investorId),
    fk_project: foreignKey({
      columns: [table.projectId],
      foreignColumns: [projects.id],
    }).onDelete("cascade"),
    fk_investor: foreignKey({
      columns: [table.investorId],
      foreignColumns: [investors.id],
    }).onDelete("cascade"),
  })
);

export type ProjectInvestor = typeof projectInvestors.$inferSelect;
export type InsertProjectInvestor = typeof projectInvestors.$inferInsert;

/**
 * PROJECT UPDATES (Real-time Updates)
 * Tracks project milestones, status changes, and operational metrics
 */
export const projectUpdates = mysqlTable(
  "projectUpdates",
  {
    id: int("id").autoincrement().primaryKey(),
    projectId: int("projectId").notNull(),
    
    // Update classification
    updateType: mysqlEnum("updateType", [
      "milestone",
      "financial",
      "operational",
      "risk",
      "regulatory",
      "construction",
      "market",
      "general",
    ]).notNull(),
    
    // Content
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    
    // Impact metrics (optional)
    financialImpact: decimal("financialImpact", { precision: 18, scale: 2 }),
    timelineImpact: int("timelineImpact"),
    
    // Visibility & notifications
    isPublic: boolean("isPublic").default(false).notNull(),
    notifyInvestors: boolean("notifyInvestors").default(true).notNull(),
    
    // Attachments
    attachmentUrls: json("attachmentUrls").$type<string[]>(),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    projectIdIdx: index("projectUpdates_projectId_idx").on(table.projectId),
    updateTypeIdx: index("projectUpdates_updateType_idx").on(table.updateType),
    createdAtIdx: index("projectUpdates_createdAt_idx").on(table.createdAt),
    fk_project: foreignKey({
      columns: [table.projectId],
      foreignColumns: [projects.id],
    }).onDelete("cascade"),
  })
);

export type ProjectUpdate = typeof projectUpdates.$inferSelect;
export type InsertProjectUpdate = typeof projectUpdates.$inferInsert;

/**
 * INVESTOR CONTACTS (Inquiry Tracking)
 * Tracks incoming inquiries and contact requests
 */
export const investorContacts = mysqlTable(
  "investorContacts",
  {
    id: int("id").autoincrement().primaryKey(),
    
    // Contact information
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 320 }).notNull(),
    phone: varchar("phone", { length: 20 }),
    company: varchar("company", { length: 255 }),
    
    // Inquiry details
    inquiryType: mysqlEnum("inquiryType", [
      "investor_portal_access",
      "partnership",
      "project_inquiry",
      "general",
      "other",
    ]).notNull(),
    message: text("message"),
    
    // Interest profile
    interestedProjectIds: json("interestedProjectIds").$type<number[]>(),
    investmentRange: varchar("investmentRange", { length: 100 }),
    
    // Status tracking
    status: mysqlEnum("status", [
      "new",
      "contacted",
      "qualified",
      "disqualified",
      "converted",
    ]).default("new").notNull(),
    assignedTo: int("assignedTo"),
    
    // Metadata
    notes: text("notes"),
    followUpDate: timestamp("followUpDate"),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    emailIdx: index("investorContacts_email_idx").on(table.email),
    statusIdx: index("investorContacts_status_idx").on(table.status),
    inquiryTypeIdx: index("investorContacts_inquiryType_idx").on(table.inquiryType),
    createdAtIdx: index("investorContacts_createdAt_idx").on(table.createdAt),
  })
);

export type InvestorContact = typeof investorContacts.$inferSelect;
export type InsertInvestorContact = typeof investorContacts.$inferInsert;

/**
 * DOCUMENTS TABLE
 * Centralized document management for investor portal
 */
export const documents = mysqlTable(
  "documents",
  {
    id: int("id").autoincrement().primaryKey(),
    projectId: int("projectId"),
    
    // Document metadata
    title: varchar("title", { length: 255 }).notNull(),
    documentType: mysqlEnum("documentType", [
      "term_sheet",
      "financial_report",
      "legal_document",
      "operational_report",
      "risk_assessment",
      "market_analysis",
      "track_record",
      "other",
    ]).notNull(),
    
    // Access control
    accessLevel: mysqlEnum("accessLevel", [
      "public",
      "qualified_investors",
      "portfolio_investors",
      "admin",
    ]).default("admin").notNull(),
    
    // File details
    fileUrl: varchar("fileUrl", { length: 500 }).notNull(),
    fileSize: int("fileSize"),
    fileType: varchar("fileType", { length: 50 }),
    
    // Version control
    version: int("version").default(1).notNull(),
    previousVersionId: int("previousVersionId"),
    
    // Metadata
    description: text("description"),
    tags: json("tags").$type<string[]>(),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  },
  (table) => ({
    projectIdIdx: index("documents_projectId_idx").on(table.projectId),
    documentTypeIdx: index("documents_documentType_idx").on(table.documentType),
    accessLevelIdx: index("documents_accessLevel_idx").on(table.accessLevel),
  })
);

export type Document = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;

/**
 * AUDIT LOG TABLE
 * Comprehensive audit trail for compliance and security
 */
export const auditLogs = mysqlTable(
  "auditLogs",
  {
    id: int("id").autoincrement().primaryKey(),
    userId: int("userId"),
    
    // Action details
    action: varchar("action", { length: 100 }).notNull(),
    entityType: varchar("entityType", { length: 100 }).notNull(),
    entityId: int("entityId").notNull(),
    
    // Change tracking
    oldValues: json("oldValues"),
    newValues: json("newValues"),
    
    // Context
    ipAddress: varchar("ipAddress", { length: 45 }),
    userAgent: text("userAgent"),
    
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("auditLogs_userId_idx").on(table.userId),
    entityTypeIdx: index("auditLogs_entityType_idx").on(table.entityType),
    createdAtIdx: index("auditLogs_createdAt_idx").on(table.createdAt),
  })
);

export type AuditLog = typeof auditLogs.$inferSelect;
export type InsertAuditLog = typeof auditLogs.$inferInsert;