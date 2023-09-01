import { State } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { StatesRepository } from '@/repositories/states-repository'


interface FetchStatesUseCaseResponse {
    states: State[]
}

export class FetchiInstituitionUseCase {
    constructor(private statesRepository: StatesRepository) { }

    async execute(): Promise<FetchStatesUseCaseResponse> {
        const states = await this.statesRepository.fetchAll()

        if (!states) {
            throw new ResourceNotFoundError()
        }
        return {
            states
        }
    }
}