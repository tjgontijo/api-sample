import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ThematicAreasRepository } from '../thematic-areas-repository'

export class PrismaThematicAreasRepository implements ThematicAreasRepository {

    async create(data: Prisma.ThematicAreaCreateInput) {
        const response = await prisma.thematicArea.create({
            data,
        })
        return response
    }

    async findMany() {
        const thematicArea = await prisma.thematicArea.findMany()
        return thematicArea
    }
}
