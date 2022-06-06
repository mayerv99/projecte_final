/*
  Warnings:

  - You are about to drop the column `inteferenceCode` on the `interferences` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "interferences" DROP COLUMN "inteferenceCode",
ADD COLUMN     "interferenceCode" TEXT;
