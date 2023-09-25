-- AlterTable
ALTER TABLE "actions" ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "thematicAreaId" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "generalGoal" TEXT NOT NULL,
    "implementationStrategy" TEXT NOT NULL,
    "diagnosticImplementationStrategy" TEXT NOT NULL,
    "governanceImplementationStrategy" TEXT NOT NULL,
    "capacityImplementationStrategy" TEXT NOT NULL,
    "acquisitionImplementationStrategy" TEXT NOT NULL,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_thematicAreaId_fkey" FOREIGN KEY ("thematicAreaId") REFERENCES "thematic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
