import { ActionsRepository } from '@/repositories/actions-repository'
import { Action } from '@prisma/client'

interface CreateActionUseCaseRequest {
    thematicAreaId: string
    short_name: string,
    name: string
    description: string
}

interface CreateActionUseCaseResponse {
    action: Action
}

export class CreateActionUseCase {
    constructor(private createActionUseCaseRepository: ActionsRepository){}

    async handle({
        thematicAreaId,
        short_name,
        name,
        description
    }: CreateActionUseCaseRequest): Promise<CreateActionUseCaseResponse>{
        const action = await this.createActionUseCaseRepository.create({
            thematicAreaId,
            short_name,
            name,
            description
        })
        return{
            action
        }
    }
}