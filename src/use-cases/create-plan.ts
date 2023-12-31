import { PlanRepository } from '@/repositories/plan-repository'
import { Plan } from '@prisma/client'

interface CreatePlanUseCaseRequest {
    state: string
    thematicArea: string
    year: string
    diagnosis: string
    justification: string
    generalGoal: string
    implementationStrategy: string
    diagnosticImplementationStrategy: string
    governanceImplementationStrategy: string
    capacityImplementationStrategy: string
    acquisitionImplementationStrategy: string
}

interface CreatePlanUseCaseResponse {
    plan: Plan
}

export class CreatePlanUseCase {
    constructor(private createPlanUseCaseRepository: PlanRepository) { }

    async handle({
        thematicArea,
        state,
        year,
        diagnosis,
        justification,
        generalGoal,
        implementationStrategy,
        diagnosticImplementationStrategy,
        governanceImplementationStrategy,
        capacityImplementationStrategy,
        acquisitionImplementationStrategy,
    }: CreatePlanUseCaseRequest): Promise<CreatePlanUseCaseResponse> {
        const plan = await this.createPlanUseCaseRepository.create({
            thematicAreaId: thematicArea,
            stateId: state,
            year,
            diagnosis,
            justification,
            generalGoal,
            implementationStrategy,
            diagnosticImplementationStrategy,
            governanceImplementationStrategy,
            capacityImplementationStrategy,
            acquisitionImplementationStrategy
        })
        return {
            plan
        }
    }
}