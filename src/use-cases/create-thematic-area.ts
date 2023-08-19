import { CreateThematicAreasRepository } from '@/repositories/thematic-areas-repository'
import { ThematicArea } from '@prisma/client'

interface CreateThematicAreaUseCaseRequest {
  name: string
  short_name: string
  percentage: number
}
interface CreateThematicAreaUseCaseResponse {
    thematicArea: ThematicArea 
}

export class CreateThematicAreaUseCase {
    constructor(private createThematicAreaRepository: CreateThematicAreasRepository) { }

    async handle({
        short_name,
        name,
        percentage,
    }: CreateThematicAreaUseCaseRequest): Promise<CreateThematicAreaUseCaseResponse> {

        const thematicArea = await this.createThematicAreaRepository.create({
            short_name,
            name,
            percentage,
        })
        return {
            thematicArea,
        }
    }
}