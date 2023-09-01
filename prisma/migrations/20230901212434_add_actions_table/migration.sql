-- CreateTable
CREATE TABLE "actions" (
    "id" TEXT NOT NULL,
    "thematicAreaId" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "decription" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_thematicAreaId_fkey" FOREIGN KEY ("thematicAreaId") REFERENCES "thematic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
