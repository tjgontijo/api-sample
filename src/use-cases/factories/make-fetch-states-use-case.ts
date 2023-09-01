import { PrismaStatesRepository } from '@/repositories/prisma/prisma-states-repository'
import { FetchiInstituitionUseCase } from '../fetch-states'


export function makeFetchStatesUseCase() {
    const statesRepository = new PrismaStatesRepository()
    const fetchStates = new FetchiInstituitionUseCase(statesRepository)

    return fetchStates
}