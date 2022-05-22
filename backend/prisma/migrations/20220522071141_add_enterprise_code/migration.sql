/*
  Warnings:

  - Added the required column `enterpriseCode` to the `enterprises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "enterprises" ADD COLUMN     "enterpriseCode" TEXT NOT NULL;
