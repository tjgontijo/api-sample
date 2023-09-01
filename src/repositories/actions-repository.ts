import { Action, Prisma } from '@prisma/client'

export interface ActionsRepository{
  create(data: Prisma.ActionUncheckedCreateInput): Promise<Action>
  fetchAll(): Promise<Action[]>
}