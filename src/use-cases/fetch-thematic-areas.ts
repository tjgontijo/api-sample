import { ThematicArea } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { ThematicAreasRepository } from '@/repositories/thematic-areas-repository'

interface FetchThematicAreaUseCaseResponse {
  thematicArea: ThematicArea
}

export class FetchThematicAreaUseCase {
    constructor(private thematicAreasRepository: ThematicAreasRepository) { }

    async execute(): Promise<FetchThematicAreaUseCaseResponse> {
        const thematicArea = await this.thematicAreasRepository.fetchAll()

        if (!thematicArea) {
            throw new ResourceNotFoundError()
        }
        return {
            thematicArea
        }
    }
}