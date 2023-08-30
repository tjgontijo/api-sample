import { prisma } from '@/lib/prisma'

import { InstituitionsRepository } from '../intituitions-repository copy'

export class PrismaInstituitionsRepository implements InstituitionsRepository {
   
    async fetchAll(){        
        const intituitions =  await prisma.institution.findMany()
        return intituitions
    }
    
}
