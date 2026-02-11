CREATE TABLE `auditLogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`action` varchar(100) NOT NULL,
	`entityType` varchar(100) NOT NULL,
	`entityId` int NOT NULL,
	`oldValues` json,
	`newValues` json,
	`ipAddress` varchar(45),
	`userAgent` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `auditLogs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `capitalStacks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int NOT NULL,
	`layerName` varchar(255) NOT NULL,
	`layerType` enum('senior_debt','mezzanine_debt','equity','preferred_equity','tax_credits','grants','alternative_financing','other') NOT NULL,
	`layerOrder` int NOT NULL,
	`amount` decimal(18,2) NOT NULL,
	`percentage` decimal(6,2) NOT NULL,
	`interestRate` decimal(6,3),
	`term` int,
	`maturityDate` timestamp,
	`expectedReturn` decimal(6,2),
	`returnType` enum('fixed','variable','equity_kicker','performance_based'),
	`sourceInvestorId` int,
	`sourceDescription` varchar(255),
	`fundingStatus` enum('committed','funded','partially_funded','pending') NOT NULL DEFAULT 'pending',
	`fundedAmount` decimal(18,2) DEFAULT '0',
	`fundedDate` timestamp,
	`covenants` json,
	`conditions` json,
	`notes` text,
	`documentationUrl` varchar(500),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `capitalStacks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `documents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int,
	`title` varchar(255) NOT NULL,
	`documentType` enum('term_sheet','financial_report','legal_document','operational_report','risk_assessment','market_analysis','track_record','other') NOT NULL,
	`accessLevel` enum('public','qualified_investors','portfolio_investors','admin') NOT NULL DEFAULT 'admin',
	`fileUrl` varchar(500) NOT NULL,
	`fileSize` int,
	`fileType` varchar(50),
	`version` int NOT NULL DEFAULT 1,
	`previousVersionId` int,
	`description` text,
	`tags` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `documents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `investorContacts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`company` varchar(255),
	`inquiryType` enum('investor_portal_access','partnership','project_inquiry','general','other') NOT NULL,
	`message` text,
	`interestedProjectIds` json,
	`investmentRange` varchar(100),
	`status` enum('new','contacted','qualified','disqualified','converted') NOT NULL DEFAULT 'new',
	`assignedTo` int,
	`notes` text,
	`followUpDate` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `investorContacts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `investors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`name` varchar(255) NOT NULL,
	`entityType` enum('individual','family_office','institutional','spv','jv','partnership','corporation') NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`organizationName` varchar(255),
	`website` varchar(255),
	`investmentStage` enum('pre_qualification','qualified','active','portfolio','exited') NOT NULL DEFAULT 'pre_qualification',
	`accreditationStatus` enum('pending','verified','expired') NOT NULL DEFAULT 'pending',
	`minimumInvestment` decimal(18,2),
	`maximumInvestment` decimal(18,2),
	`totalDeployed` decimal(18,2) DEFAULT '0',
	`focusSectors` json,
	`geographicFocus` json,
	`investmentHorizon` varchar(50),
	`notes` text,
	`isActive` boolean NOT NULL DEFAULT true,
	`lastContactedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `investors_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projectInvestors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int NOT NULL,
	`investorId` int NOT NULL,
	`investmentAmount` decimal(18,2) NOT NULL,
	`investmentDate` timestamp NOT NULL DEFAULT (now()),
	`status` enum('interested','committed','funded','exited','withdrawn') NOT NULL DEFAULT 'interested',
	`returnPercentage` decimal(6,2),
	`exitDate` timestamp,
	`actualReturn` decimal(18,2),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projectInvestors_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_project_investor` UNIQUE(`projectId`,`investorId`)
);
--> statement-breakpoint
CREATE TABLE `projectUpdates` (
	`id` int AUTO_INCREMENT NOT NULL,
	`projectId` int NOT NULL,
	`updateType` enum('milestone','financial','operational','risk','regulatory','construction','market','general') NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`financialImpact` decimal(18,2),
	`timelineImpact` int,
	`isPublic` boolean NOT NULL DEFAULT false,
	`notifyInvestors` boolean NOT NULL DEFAULT true,
	`attachmentUrls` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projectUpdates_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`projectType` enum('mixed_use','industrial','residential','commercial','energy','infrastructure','public_private','other') NOT NULL,
	`location` varchar(255) NOT NULL,
	`city` varchar(100) NOT NULL,
	`state` varchar(50) NOT NULL,
	`country` varchar(100) NOT NULL DEFAULT 'USA',
	`coordinates` json,
	`description` text,
	`scope` text,
	`totalUnits` int,
	`totalSqft` decimal(15,2),
	`projectStatus` enum('planning','entitlement','construction','stabilized','exited','on_hold') NOT NULL DEFAULT 'planning',
	`startDate` timestamp,
	`completionDate` timestamp,
	`expectedCompletion` timestamp,
	`totalProjectCost` decimal(18,2),
	`capitalDeployed` decimal(18,2) DEFAULT '0',
	`projectedReturn` decimal(6,2),
	`actualReturn` decimal(6,2),
	`occupancyRate` decimal(5,2),
	`noi` decimal(18,2),
	`sustainabilityFeatures` json,
	`innovationTechnologies` json,
	`imageUrl` varchar(500),
	`documentationUrl` varchar(500),
	`notes` text,
	`isPublic` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `projects_id` PRIMARY KEY(`id`),
	CONSTRAINT `projects_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
ALTER TABLE `capitalStacks` ADD CONSTRAINT `capitalStacks_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `projectInvestors` ADD CONSTRAINT `projectInvestors_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `projectInvestors` ADD CONSTRAINT `projectInvestors_investorId_investors_id_fk` FOREIGN KEY (`investorId`) REFERENCES `investors`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `projectUpdates` ADD CONSTRAINT `projectUpdates_projectId_projects_id_fk` FOREIGN KEY (`projectId`) REFERENCES `projects`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `auditLogs_userId_idx` ON `auditLogs` (`userId`);--> statement-breakpoint
CREATE INDEX `auditLogs_entityType_idx` ON `auditLogs` (`entityType`);--> statement-breakpoint
CREATE INDEX `auditLogs_createdAt_idx` ON `auditLogs` (`createdAt`);--> statement-breakpoint
CREATE INDEX `capitalStacks_projectId_idx` ON `capitalStacks` (`projectId`);--> statement-breakpoint
CREATE INDEX `capitalStacks_layerType_idx` ON `capitalStacks` (`layerType`);--> statement-breakpoint
CREATE INDEX `capitalStacks_sourceInvestorId_idx` ON `capitalStacks` (`sourceInvestorId`);--> statement-breakpoint
CREATE INDEX `capitalStacks_fundingStatus_idx` ON `capitalStacks` (`fundingStatus`);--> statement-breakpoint
CREATE INDEX `documents_projectId_idx` ON `documents` (`projectId`);--> statement-breakpoint
CREATE INDEX `documents_documentType_idx` ON `documents` (`documentType`);--> statement-breakpoint
CREATE INDEX `documents_accessLevel_idx` ON `documents` (`accessLevel`);--> statement-breakpoint
CREATE INDEX `investorContacts_email_idx` ON `investorContacts` (`email`);--> statement-breakpoint
CREATE INDEX `investorContacts_status_idx` ON `investorContacts` (`status`);--> statement-breakpoint
CREATE INDEX `investorContacts_inquiryType_idx` ON `investorContacts` (`inquiryType`);--> statement-breakpoint
CREATE INDEX `investorContacts_createdAt_idx` ON `investorContacts` (`createdAt`);--> statement-breakpoint
CREATE INDEX `investors_userId_idx` ON `investors` (`userId`);--> statement-breakpoint
CREATE INDEX `investors_email_idx` ON `investors` (`email`);--> statement-breakpoint
CREATE INDEX `investors_investmentStage_idx` ON `investors` (`investmentStage`);--> statement-breakpoint
CREATE INDEX `investors_entityType_idx` ON `investors` (`entityType`);--> statement-breakpoint
CREATE INDEX `projectInvestors_projectId_idx` ON `projectInvestors` (`projectId`);--> statement-breakpoint
CREATE INDEX `projectInvestors_investorId_idx` ON `projectInvestors` (`investorId`);--> statement-breakpoint
CREATE INDEX `projectInvestors_status_idx` ON `projectInvestors` (`status`);--> statement-breakpoint
CREATE INDEX `projectUpdates_projectId_idx` ON `projectUpdates` (`projectId`);--> statement-breakpoint
CREATE INDEX `projectUpdates_updateType_idx` ON `projectUpdates` (`updateType`);--> statement-breakpoint
CREATE INDEX `projectUpdates_createdAt_idx` ON `projectUpdates` (`createdAt`);--> statement-breakpoint
CREATE INDEX `projects_slug_idx` ON `projects` (`slug`);--> statement-breakpoint
CREATE INDEX `projects_projectStatus_idx` ON `projects` (`projectStatus`);--> statement-breakpoint
CREATE INDEX `projects_projectType_idx` ON `projects` (`projectType`);--> statement-breakpoint
CREATE INDEX `projects_cityState_idx` ON `projects` (`city`,`state`);