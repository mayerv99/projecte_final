-- CreateTable
CREATE TABLE "enterprises" (
    "id" SERIAL NOT NULL,
    "enterpriseName" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "ownerIdentification" TEXT NOT NULL,
    "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastFieldUpdate" TIMESTAMP(3) NOT NULL,
    "localAddress" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "referencePoint" TEXT NOT NULL,
    "irrigableArea" DECIMAL(65,30) NOT NULL,
    "registerCurrentStep" INTEGER,
    "lastRegisterStepUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enterprises_pkey" PRIMARY KEY ("id")
);
