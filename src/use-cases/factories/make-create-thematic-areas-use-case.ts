import { CreateThematicAreaUseCase } from '../create-thematic-area'
import { PrismaThematicAreasRepository } from '@/repositories/prisma/prisma-thematic-area-repository'

export function makeCreateThematicAreaUseCase() {
    const thematicAreasRepository = new PrismaThematicAreasRepository()
    const createThematicArea = new CreateThematicAreaUseCase(thematicAreasRepository)

    return createThematicArea
}