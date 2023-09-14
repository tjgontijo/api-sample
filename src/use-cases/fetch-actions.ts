import { Action } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { ActionsRepository } from '@/repositories/actions-repository'


interface FetchActionUseCaseResponse {
  actions: Action[]
}

export class FetchActionUseCase {
    constructor(private actionsRepository: ActionsRepository) { }

    async execute(): Promise<FetchActionUseCaseResponse> {
        const actions = await this.actionsRepository.fetchAll()

        if (!actions) {
            throw new ResourceNotFoundError()
        }
        return {
            actions
        }
    }
}