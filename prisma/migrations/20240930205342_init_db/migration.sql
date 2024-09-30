-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuralProducer" (
    "id" SERIAL NOT NULL,
    "cpf" TEXT NOT NULL,
    "cnpj" TEXT,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RuralProducer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farmer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "total_area" TEXT NOT NULL,
    "total_area_arable" TEXT NOT NULL,
    "total_area_vegetable" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "producerId" INTEGER NOT NULL,

    CONSTRAINT "Farmer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantedCulture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "farmerId" INTEGER NOT NULL,

    CONSTRAINT "PlantedCulture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RuralProducer_cpf_key" ON "RuralProducer"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "RuralProducer_cnpj_key" ON "RuralProducer"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Farmer_name_key" ON "Farmer"("name");

-- AddForeignKey
ALTER TABLE "Farmer" ADD CONSTRAINT "Farmer_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "RuralProducer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantedCulture" ADD CONSTRAINT "PlantedCulture_farmerId_fkey" FOREIGN KEY ("farmerId") REFERENCES "Farmer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
