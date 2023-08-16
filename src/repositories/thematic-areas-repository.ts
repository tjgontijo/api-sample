import { Prisma, ThematicArea } from '@prisma/client'

export interface CreateThematicAreasRepository { 
  create(data: Prisma.ThematicAreaUncheckedCreateInput ): Promise<ThematicArea>
}