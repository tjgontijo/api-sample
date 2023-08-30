/*
  Warnings:

  - A unique constraint covering the columns `[short_name]` on the table `institutions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `short_name` to the `institutions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "institutions" ADD COLUMN     "short_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "institutions_short_name_key" ON "institutions"("short_name");
