-- CreateTable
CREATE TABLE "state" (
    "id" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "permission" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolesOnPermissions" (
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "RolesOnPermissions_pkey" PRIMARY KEY ("roleId","permissionId")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "thematic_areas" (
    "id" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "thematic_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actions" (
    "id" TEXT NOT NULL,
    "thematicAreaId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "national_plans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "national_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NationalPlanGoal" (
    "id" TEXT NOT NULL,
    "nationalPlanId" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "NationalPlanGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types_of_expenses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_of_expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_types" (
    "id" TEXT NOT NULL,
    "typeOfExpenseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "items_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_groups" (
    "id" TEXT NOT NULL,
    "itemTypeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "items_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items_classes" (
    "id" TEXT NOT NULL,
    "itemGroupId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "items_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "itemClassId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechnicalNote" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TechnicalNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "implementation_strategies" (
    "id" TEXT NOT NULL,
    "diagnosis" TEXT NOT NULL,
    "governance" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "acquisition" TEXT NOT NULL,

    CONSTRAINT "implementation_strategies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "general_goals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "general_goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "generalGoalId" TEXT NOT NULL,
    "implementationStrategyId" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "thematicAreaId" TEXT NOT NULL,
    "diagnostic" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "overallGoal" TEXT NOT NULL,
    "indicator" TEXT NOT NULL,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionPlan" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "nationalPlanGoalId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "plannedQuantity" DECIMAL(65,30) NOT NULL,
    "plannedValue" DECIMAL(65,30) NOT NULL,
    "stateGoal" TEXT NOT NULL,
    "indicator" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "indicatorFormula" TEXT NOT NULL,

    CONSTRAINT "ActionPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoleToPermission" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "thematic_areas_short_name_key" ON "thematic_areas"("short_name");

-- CreateIndex
CREATE UNIQUE INDEX "thematic_areas_name_key" ON "thematic_areas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "actions_name_key" ON "actions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToPermission_AB_unique" ON "_RoleToPermission"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToPermission_B_index" ON "_RoleToPermission"("B");

-- AddForeignKey
ALTER TABLE "RolesOnPermissions" ADD CONSTRAINT "RolesOnPermissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesOnPermissions" ADD CONSTRAINT "RolesOnPermissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actions" ADD CONSTRAINT "actions_thematicAreaId_fkey" FOREIGN KEY ("thematicAreaId") REFERENCES "thematic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NationalPlanGoal" ADD CONSTRAINT "NationalPlanGoal_nationalPlanId_fkey" FOREIGN KEY ("nationalPlanId") REFERENCES "national_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_types" ADD CONSTRAINT "items_types_typeOfExpenseId_fkey" FOREIGN KEY ("typeOfExpenseId") REFERENCES "types_of_expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_groups" ADD CONSTRAINT "items_groups_itemTypeId_fkey" FOREIGN KEY ("itemTypeId") REFERENCES "items_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items_classes" ADD CONSTRAINT "items_classes_itemGroupId_fkey" FOREIGN KEY ("itemGroupId") REFERENCES "items_groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_itemClassId_fkey" FOREIGN KEY ("itemClassId") REFERENCES "items_classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TechnicalNote" ADD CONSTRAINT "TechnicalNote_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_generalGoalId_fkey" FOREIGN KEY ("generalGoalId") REFERENCES "general_goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_implementationStrategyId_fkey" FOREIGN KEY ("implementationStrategyId") REFERENCES "implementation_strategies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans_thematicAreaId_fkey" FOREIGN KEY ("thematicAreaId") REFERENCES "thematic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_planId_fkey" FOREIGN KEY ("planId") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_nationalPlanGoalId_fkey" FOREIGN KEY ("nationalPlanGoalId") REFERENCES "NationalPlanGoal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionPlan" ADD CONSTRAINT "ActionPlan_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToPermission" ADD CONSTRAINT "_RoleToPermission_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToPermission" ADD CONSTRAINT "_RoleToPermission_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;