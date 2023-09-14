import { makeFetchActionUseCase } from '@/use-cases/factories/make-fetch-actions-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchActions(request: FastifyRequest, reply: FastifyReply) {
    
    const fetchActions = makeFetchActionUseCase()
    const actions = await fetchActions.execute()
    console.log(actions)
    return reply.status(200).send(actions)
}





