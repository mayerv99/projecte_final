-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "userIdentification" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phonePrefix" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "localAddress" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "plantInOtherEnterprises" BOOLEAN NOT NULL,
    "enterpriseId" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_enterpriseId_fkey" FOREIGN KEY ("enterpriseId") REFERENCES "enterprises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
