import { PrismaActionsRepository } from '@/repositories/prisma/prisma-actions-repository'
import { CreateActionUseCase } from '../create-action'

export function makeCreateActionUseCase() {
    const actionRepository = new PrismaActionsRepository()
    const createAction = new CreateActionUseCase(actionRepository)

    return createAction
}