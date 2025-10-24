/*
  Warnings:

  - You are about to drop the column `userSchoolId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."User_userSchoolId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userSchoolId",
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
