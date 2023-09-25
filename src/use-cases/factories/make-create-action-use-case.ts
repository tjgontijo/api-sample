import { PrismaPlanRepository } from '@/repositories/prisma/prisma-plan-repository'
import { CreatePlanUseCase } from '../create-action-plan'

export function makeCreatePlanUseCase() {
    const planRepository = new PrismaPlanRepository()
    const createPlan = new CreatePlanUseCase(planRepository)

    return createPlan
}