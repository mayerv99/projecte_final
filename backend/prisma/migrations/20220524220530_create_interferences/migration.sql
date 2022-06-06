/*
  Warnings:

  - A unique constraint covering the columns `[enterpriseCode]` on the table `enterprises` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "interferences" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "enterpriseCode" TEXT NOT NULL,
    "inteferenceCode" TEXT,
    "consumerUnity" TEXT,
    "reglaId" INTEGER,
    "cnarhId" INTEGER,
    "pointDenomination" TEXT,
    "type" TEXT,
    "subType" TEXT,
    "waterBodyName" TEXT,
    "waterBodyType" TEXT,
    "latitude" TEXT,
    "longitude" TEXT,
    "uf" TEXT,
    "city" TEXT,
    "domain" TEXT,
    "source" TEXT,
    "regularSituation" TEXT,
    "interferenceSituation" TEXT,
    "authorizationType" TEXT,
    "actType" TEXT,
    "actNumber" TEXT,
    "authorizationInitialDate" TIMESTAMP(3),
    "authorizationEndDate" TIMESTAMP(3),
    "mainUtility" TEXT,
    "secondaruUtility" TEXT,
    "thirdUtility" TEXT,
    "irrigationSystemFinality" TEXT,
    "irrigationAreaSystemFynality" TEXT,
    "irrigableCultureMoreFrequently" TEXT,

    CONSTRAINT "interferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enterprises_enterpriseCode_key" ON "enterprises"("enterpriseCode");

-- AddForeignKey
ALTER TABLE "interferences" ADD CONSTRAINT "interferences_enterpriseCode_fkey" FOREIGN KEY ("enterpriseCode") REFERENCES "enterprises"("enterpriseCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interferences" ADD CONSTRAINT "interferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
