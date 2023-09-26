import { CreateActionUseCase } from '../create-action'
import { PrismaActionsRepository } from '@/repositories/prisma/prisma-actions-repository'

export function makeCreateActionUseCase() {
    const actionRepository = new PrismaActionsRepository()
    const createAction = new CreateActionUseCase(actionRepository)

    return createAction
}