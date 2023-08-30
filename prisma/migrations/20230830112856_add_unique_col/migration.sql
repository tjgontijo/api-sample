/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `institutions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortName]` on the table `states` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `states` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "institutions_name_key" ON "institutions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "states_shortName_key" ON "states"("shortName");

-- CreateIndex
CREATE UNIQUE INDEX "states_name_key" ON "states"("name");
