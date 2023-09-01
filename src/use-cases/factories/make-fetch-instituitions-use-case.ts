
import { PrismaInstituitionsRepository } from '@/repositories/prisma/prisma-intituitions-repository'
import { FetchiInstituitionUseCase } from '../fetch-instituitions'

export function makeFetchInstituitionsUseCase() {
    const instituitionsRepository = new PrismaInstituitionsRepository()
    const fetchInstituitions = new FetchiInstituitionUseCase(instituitionsRepository)

    return fetchInstituitions
}