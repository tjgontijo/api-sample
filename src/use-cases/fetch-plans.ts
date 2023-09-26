import { Plan } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { PlanRepository } from '@/repositories/plan-repository'


interface FetchPlanUseCaseResponse {
  plans: Plan[]
}

export class FetchPlanUseCase {
    constructor(private plansRepository: PlanRepository) { }

    async execute(): Promise<FetchPlanUseCaseResponse> {
        const plans = await this.plansRepository.fetchAll()

        if (!plans) {
            throw new ResourceNotFoundError()
        }
        return {
            plans
        }
    }
}