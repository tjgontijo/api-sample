import { Prisma, ThematicArea } from '@prisma/client'

export interface ThematicAreasRepository {
  create(data: Prisma.ThematicAreaCreateInput): Promise<ThematicArea>
}