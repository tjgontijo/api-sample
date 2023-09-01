import { prisma } from '@/lib/prisma'
import { StatesRepository } from '../states-repository'

export class PrismaStatesRepository implements StatesRepository {
   
    async fetchAll(){        
        const states =  await prisma.state.findMany()
        return states
    }
    
}
