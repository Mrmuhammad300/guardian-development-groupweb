CREATE TABLE `emailPreferences` (
	`id` int AUTO_INCREMENT NOT NULL,
	`investorId` int NOT NULL,
	`notifyMilestones` boolean NOT NULL DEFAULT true,
	`notifyCapitalCalls` boolean NOT NULL DEFAULT true,
	`notifyDistributions` boolean NOT NULL DEFAULT true,
	`notifyDocuments` boolean NOT NULL DEFAULT true,
	`notifyProjectUpdates` boolean NOT NULL DEFAULT true,
	`emailFrequency` varchar(20) NOT NULL DEFAULT 'immediate',
	`allowMarketing` boolean NOT NULL DEFAULT false,
	`allowSMS` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `emailPreferences_id` PRIMARY KEY(`id`),
	CONSTRAINT `emailPreferences_investorId_unique` UNIQUE(`investorId`)
);
--> statement-breakpoint
ALTER TABLE `emailPreferences` ADD CONSTRAINT `emailPreferences_investorId_investors_id_fk` FOREIGN KEY (`investorId`) REFERENCES `investors`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `emailPreferences_investorId_idx` ON `emailPreferences` (`investorId`);