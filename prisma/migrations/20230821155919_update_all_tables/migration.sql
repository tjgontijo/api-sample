/*
  Warnings:

  - You are about to drop the `ActionPlan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Institution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NationalPlanGoal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolesOnPermissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TechnicalNote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `state` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActionPlan" DROP CONSTRAINT "ActionPlan_institutionId_fkey";

-- DropForeignKey
ALTER TABLE "ActionPlan" DROP CONSTRAINT "ActionPlan_itemId_fkey";

-- DropForeignKey
ALTER TABLE "ActionPlan" DROP CONSTRAINT "ActionPlan_nationalPlanGoalId_fkey";

-- DropForeignKey
ALTER TABLE "ActionPlan" DROP CONSTRAINT "ActionPlan_planId_fkey";

-- DropForeignKey
ALTER TABLE "NationalPlanGoal" DROP CONSTRAINT "NationalPlanGoal_nationalPlanId_fkey";

-- DropForeignKey
ALTER TABLE "RolesOnPermissions" DROP CONSTRAINT "RolesOnPermissions_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "RolesOnPermissions" DROP CONSTRAINT "RolesOnPermissions_roleId_fkey";

-- DropForeignKey
ALTER TABLE "TechnicalNote" DROP CONSTRAINT "TechnicalNote_itemId_fkey";

-- DropForeignKey
ALTER TABLE "plans" DROP CONSTRAINT "plans_stateId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_stateId_fkey";

-- DropTable
DROP TABLE "ActionPlan";

-- DropTable
DROP TABLE "Institution";

-- DropTable
DROP TABLE "NationalPlanGoal";

-- DropTable
DROP TABLE "RolesOnPermissions";

-- DropTable
DROP TABLE "TechnicalNote";

-- DropTable
DROP TABLE "state";

-- CreateTable
CREATE TABLE "states" (
    "id" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_on_permissions" (
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "roles_on_permissions_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "users_on_permissions" (
    "permissionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "users_on_permissions_pkey" PRIMARY KEY ("userId","permissionId")
);

-- CreateTable
CREATE TABLE "national_plan_goals" (
    "id" TEXT NOT NULL,
    "nationalPlanId" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "national_plan_goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technical_notes" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "technical_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "institutions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actions_plans" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "nationalPlanGoalId" TEXT NOT NULL,

    CONSTRAINT "actions_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_plans" (
    "id" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "actionPlanId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "stateGoal" TEXT NOT NULL,
    "indicator" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "indicatorFormula" TEXT NOT NULL,
    "plannedQuantity" DECIMAL(65,30) NOT NULL,
    "plannedValue" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "items_plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "roles_on_permissions" ADD CONSTRAINT "roles_on_permissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_on_permissions" ADD CONSTRAINT "roles_on_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_permissions" ADD CONSTRAINT "users_on_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_on_permissions" ADD CONSTRAINT "users_on_permissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "national_plan_goals" ADD CONSTRAINT "national_plan_goals_nationalPlanId_fkey" FOREIGN KEY ("nationalPlanId") REFERENCES "national_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technical_notes" ADD CONSTRAINT "technical_notes_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actions_plans" ADD CONSTRAINT "actions_plans_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actions_plans" ADD CONSTRAINT "actions_plans_nationalPlanGoalId_fkey" FOREIGN KEY ("nationalPlanGoalId") REFERENCES "national_plan_goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_plans" ADD CONSTRAINT "items_plans_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "institutions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_plans" ADD CONSTRAINT "items_plans_actionPlanId_fkey" FOREIGN KEY ("actionPlanId") REFERENCES "actions_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_plans" ADD CONSTRAINT "items_plans_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
