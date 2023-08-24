/*
  Warnings:

  - You are about to drop the `_RoleToPermission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoleToPermission" DROP CONSTRAINT "_RoleToPermission_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToPermission" DROP CONSTRAINT "_RoleToPermission_B_fkey";

-- DropTable
DROP TABLE "_RoleToPermission";

-- CreateTable
CREATE TABLE "_RolesOnPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RolesOnPermissions_AB_unique" ON "_RolesOnPermissions"("A", "B");

-- CreateIndex
CREATE INDEX "_RolesOnPermissions_B_index" ON "_RolesOnPermissions"("B");

-- AddForeignKey
ALTER TABLE "_RolesOnPermissions" ADD CONSTRAINT "_RolesOnPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolesOnPermissions" ADD CONSTRAINT "_RolesOnPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
