/*
  Warnings:

  - The `irrigationAreaSystemFynality` column on the `interferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "enterprises" ALTER COLUMN "enterpriseName" DROP NOT NULL,
ALTER COLUMN "ownerName" DROP NOT NULL,
ALTER COLUMN "ownerIdentification" DROP NOT NULL,
ALTER COLUMN "registerDate" DROP NOT NULL,
ALTER COLUMN "localAddress" DROP NOT NULL,
ALTER COLUMN "complement" DROP NOT NULL,
ALTER COLUMN "referencePoint" DROP NOT NULL,
ALTER COLUMN "irrigableArea" DROP NOT NULL,
ALTER COLUMN "enterpriseCode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "interferences" ADD COLUMN     "animalsNumber" INTEGER,
ADD COLUMN     "animalsNumber2" INTEGER,
ADD COLUMN     "aquacultureCultivation" TEXT,
ADD COLUMN     "aquacultureTanks" INTEGER,
ADD COLUMN     "aquacultureTanksDepth" DECIMAL(65,30),
ADD COLUMN     "aquacultureTanksTotalArea" DECIMAL(65,30),
ADD COLUMN     "irrigableCultureMoreFrequently2" TEXT,
ADD COLUMN     "irrigableCultureMoreFrequently3" TEXT,
ADD COLUMN     "irrigationAreaSystemFynality2" DECIMAL(65,30),
ADD COLUMN     "irrigationAreaSystemFynality3" DECIMAL(65,30),
ADD COLUMN     "irrigationSystemFinality2" TEXT,
ADD COLUMN     "irrigationSystemFinality3" TEXT,
ADD COLUMN     "observation" TEXT,
ADD COLUMN     "peopleNumber" INTEGER,
ADD COLUMN     "speciesCreation" TEXT,
ADD COLUMN     "speciesCreation2" TEXT,
ADD COLUMN     "systemCreation" TEXT,
ADD COLUMN     "systemCreation2" TEXT,
DROP COLUMN "irrigationAreaSystemFynality",
ADD COLUMN     "irrigationAreaSystemFynality" DECIMAL(65,30);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userIdentification" DROP NOT NULL,
ALTER COLUMN "userName" DROP NOT NULL,
ALTER COLUMN "phonePrefix" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "localAddress" DROP NOT NULL,
ALTER COLUMN "complement" DROP NOT NULL,
ALTER COLUMN "addressNumber" DROP NOT NULL,
ALTER COLUMN "district" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "uf" DROP NOT NULL,
ALTER COLUMN "cep" DROP NOT NULL,
ALTER COLUMN "postalCode" DROP NOT NULL,
ALTER COLUMN "plantInOtherEnterprises" DROP NOT NULL;
