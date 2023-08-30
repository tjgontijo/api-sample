import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

import { ThematicAreasRepository } from '../thematic-areas-repository'

export class PrismaThematicAreasRepository implements ThematicAreasRepository {
   
    async fetchAll(){        
        const thematicAreas =  await prisma.thematicArea.findMany()
        return thematicAreas
    }

    async create(data: Prisma.ThematicAreaCreateInput) {
        const response = await prisma.thematicArea.create({
            data,
        })
        return response
    }
}
