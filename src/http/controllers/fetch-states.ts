import { makeFetchStatesUseCase } from '@/use-cases/factories/make-fetch-states-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchStates(request: FastifyRequest, reply: FastifyReply) {
    
    const fetchStates = makeFetchStatesUseCase()
    const states = await fetchStates.execute()

    return reply.status(200).send(states)
}





