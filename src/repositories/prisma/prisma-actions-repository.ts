import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { ActionsRepository } from '../actions-repository'

export class PrismaActionsRepository implements ActionsRepository {
   
    async fetchAll(){        
        const actions =  await prisma.action.findMany()
        return actions
    }

    async create(data: Prisma.ActionUncheckedCreateInput) {
        const response = await prisma.action.create({
            data,
        })
        return response
    }
}
