-- CreateTable
CREATE TABLE `accounts` (
    `id` CHAR(36) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `provider` VARCHAR(255) NOT NULL,
    `provider_account_id` VARCHAR(255) NOT NULL,
    `refresh_token` VARCHAR(255) NULL,
    `access_token` VARCHAR(255) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(255) NULL,
    `scope` VARCHAR(255) NULL,
    `id_token` VARCHAR(255) NULL,
    `session_state` VARCHAR(255) NULL,
    `user_id` CHAR(36) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` CHAR(36) NOT NULL,
    `expires` DATETIME(0) NOT NULL,
    `session_token` VARCHAR(255) NOT NULL,
    `user_id` CHAR(36) NULL,

    UNIQUE INDEX `sessionToken`(`session_token`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `emailVerified` DATETIME(0) NULL,
    `image` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `pwd` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_tokens` (
    `token` VARCHAR(255) NOT NULL,
    `identifier` VARCHAR(255) NOT NULL,
    `expires` DATETIME(0) NOT NULL,

    PRIMARY KEY (`token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
