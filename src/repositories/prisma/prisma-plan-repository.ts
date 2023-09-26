import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { PlanRepository } from '../plan-repository'

export class PrismaPlanRepository implements PlanRepository {

    async fetchAll() {
        const plans = await prisma.plan.findMany({
            include: { 
                thematicArea: true,
                state: true
            }
        })
        return plans
    }

    async create(data: Prisma.PlanUncheckedCreateInput) {
        const response = await prisma.plan.create({
            data,
        })
        return response
    }
}
