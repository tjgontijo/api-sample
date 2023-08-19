import { Prisma, ThematicArea } from '@prisma/client'
import { CreateThematicAreasRepository } from '../thematic-areas-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryCreateThematicAreaRepository implements CreateThematicAreasRepository {
    public items: ThematicArea[] = []
    
    async create(data: Prisma.ThematicAreaUncheckedCreateInput) {
        const thematicArea = {
            id: randomUUID(),
            short_name: data.short_name,
            name: data.name,
            percentage: data.percentage,           
            created_at: new Date(),
        }

        this.items.push(thematicArea)

        return thematicArea
    }
}