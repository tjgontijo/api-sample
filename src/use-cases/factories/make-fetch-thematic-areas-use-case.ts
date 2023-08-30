import { PrismaThematicAreasRepository } from '@/repositories/prisma/prisma-thematic-areas-repository'
import { FetchThematicAreaUseCase } from '../fetch-thematic-areas'

export function makeFetchThematicAreaUseCase() {
    const thematicAreasRepository = new PrismaThematicAreasRepository()
    const fetchThematicArea = new FetchThematicAreaUseCase(thematicAreasRepository)

    return fetchThematicArea
}