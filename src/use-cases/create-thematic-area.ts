import { ThematicAreasRepository } from '@/repositories/thematic-areas-repository'
import { ThematicArea } from '@prisma/client'

interface CreateThematicAreaUseCaseRequest {
    short_name: string 
    name: string
}
interface CreateThematicAreaUseCaseResponse {
    thematicArea: ThematicArea 
}

export class CreateThematicAreaUseCase {
    constructor(private createThematicAreaRepository: ThematicAreasRepository) { }

    async handle({
        short_name,
        name,
    }: CreateThematicAreaUseCaseRequest): Promise<CreateThematicAreaUseCaseResponse> {

        const thematicArea = await this.createThematicAreaRepository.create({
            short_name,
            name,
        })
        return {
            thematicArea,
        }
    }
}