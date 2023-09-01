import { makeFetchInstituitionsUseCase } from '@/use-cases/factories/make-fetch-instituitions-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchInstituitions(request: FastifyRequest, reply: FastifyReply) {
    
    const fetchInstituitions = makeFetchInstituitionsUseCase()
    const intituitions = await fetchInstituitions.execute()

    return reply.status(200).send(intituitions)
}





