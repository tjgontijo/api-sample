/*
  Warnings:

  - A unique constraint covering the columns `[short_name]` on the table `thematic_areas` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `short_name` to the `thematic_areas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "thematic_areas" ADD COLUMN     "short_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "thematic_areas_short_name_key" ON "thematic_areas"("short_name");
