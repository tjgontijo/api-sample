import { PrismaActionsRepository } from '@/repositories/prisma/prisma-actions-repository'

import { FetchActionUseCase } from '../fetch-actions'

export function makeFetchActionUseCase() {
    const actionRepository = new PrismaActionsRepository()
    const fetchActions = new FetchActionUseCase(actionRepository)

    return fetchActions
}