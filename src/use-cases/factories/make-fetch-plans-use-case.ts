import { PrismaPlanRepository } from '@/repositories/prisma/prisma-plan-repository'
import { FetchPlanUseCase } from '../fetch-plans'

export function makeFetchPlanUseCase() {
    const planRepository = new PrismaPlanRepository()
    const fetchPlans = new FetchPlanUseCase(planRepository)

    return fetchPlans
}