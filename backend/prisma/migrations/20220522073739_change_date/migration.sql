/*
  Warnings:

  - Made the column `registerDate` on table `enterprises` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "enterprises" ALTER COLUMN "registerDate" SET NOT NULL,
ALTER COLUMN "registerDate" DROP DEFAULT,
ALTER COLUMN "registerDate" SET DATA TYPE TEXT;
