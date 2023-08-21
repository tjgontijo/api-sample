/*
  Warnings:

  - You are about to drop the column `typeOfExpenseId` on the `items_types` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `types_of_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items_types" DROP CONSTRAINT "items_types_typeOfExpenseId_fkey";

-- AlterTable
ALTER TABLE "items_types" DROP COLUMN "typeOfExpenseId";

-- AlterTable
ALTER TABLE "types_of_expenses" ADD COLUMN     "itemId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "types_of_expenses" ADD CONSTRAINT "types_of_expenses_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
