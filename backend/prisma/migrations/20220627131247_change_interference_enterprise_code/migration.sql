/*
  Warnings:

  - You are about to drop the column `enterpriseCode` on the `interferences` table. All the data in the column will be lost.
  - Added the required column `enterpriseId` to the `interferences` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "interferences" DROP CONSTRAINT "interferences_enterpriseCode_fkey";

-- AlterTable
ALTER TABLE "interferences" DROP COLUMN "enterpriseCode",
ADD COLUMN     "enterpriseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "interferences" ADD CONSTRAINT "interferences_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "enterprises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
