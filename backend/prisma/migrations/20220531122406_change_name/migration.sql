/*
  Warnings:

  - You are about to drop the column `secondaruUtility` on the `interferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "interferences" DROP COLUMN "secondaruUtility",
ADD COLUMN     "secondaryUtility" TEXT;
