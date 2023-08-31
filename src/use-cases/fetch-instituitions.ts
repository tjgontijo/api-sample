import { Institution } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { InstituitionsRepository } from '@/repositories/intituitions-repository'


interface FetchinstItuitionUseCaseResponse {
  instituition: Institution[]
}

export class FetchiInstituitionUseCase {
    constructor(private instituitionsRepository: InstituitionsRepository) { }

    async execute(): Promise<FetchinstItuitionUseCaseResponse> {
        const instituition = await this.instituitionsRepository.fetchAll()

        if (!instituition) {
            throw new ResourceNotFoundError()
        }
        return {
            instituition
        }
    }
}