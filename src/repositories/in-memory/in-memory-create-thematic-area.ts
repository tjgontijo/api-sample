import { Prisma, ThematicArea } from '@prisma/client'
import { ThematicAreasRepository } from '../thematic-areas-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryThematicAreasRepository implements ThematicAreasRepository {
    public items: ThematicArea[] = []
    
    async create(data: Prisma.ThematicAreaUncheckedCreateInput) {
        const thematicArea = {
            id: randomUUID(),
            short_name: data.short_name,
            name: data.name,                   
            created_at: new Date(),
        }

        this.items.push(thematicArea)
        return thematicArea
    }
}