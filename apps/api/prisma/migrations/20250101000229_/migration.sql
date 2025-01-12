/*
  Warnings:

  - You are about to drop the column `shouldAttachUsersByDomain` on the `organizations` table. All the data in the column will be lost.
  - You are about to drop the column `shouldAttachUsersByDomain` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tokens` table. All the data in the column will be lost.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "shouldAttachUsersByDomain",
ADD COLUMN     "should_attach_users_by_domain" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "domain" DROP NOT NULL;

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "shouldAttachUsersByDomain";

-- AlterTable
ALTER TABLE "tokens" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;
