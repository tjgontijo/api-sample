import { Plan, Prisma } from '@prisma/client'

export interface PlanRepository {
  create(data: Prisma.PlanUncheckedCreateInput): Promise<Plan>
  fetchAll(): Promise<Plan[]>
}