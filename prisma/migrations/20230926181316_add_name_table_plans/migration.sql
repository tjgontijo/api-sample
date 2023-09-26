/*
  Warnings:

  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_stateId_fkey";

-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_thematicAreaId_fkey";

-- DropTable
DROP TABLE "Plan";

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "thematicAreaId" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "generalGoal" TEXT NOT NULL,
    "implementationStrategy" TEXT NOT NULL,
    "diagnosticImplementationStrategy" TEXT NOT NULL,
    "governanceImplementationStrategy" TEXT NOT NULL,
    "capacityImplementationStrategy" TEXT NOT NULL,
    "acquisitionImplementationStrategy" TEXT NOT NULL,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_thematicAreaId_fkey" FOREIGN KEY ("thematicAreaId") REFERENCES "thematic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
