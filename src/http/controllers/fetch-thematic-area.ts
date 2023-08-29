import { makeFetchThematicAreaUseCase } from '@/use-cases/factories/make-fetch-thematic-areas-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchThematicArea(request: FastifyRequest, reply: FastifyReply) {
    
    const fetchThematicArea = makeFetchThematicAreaUseCase()
    const thematicAreas = await fetchThematicArea.execute()

    return reply.status(200).send(thematicAreas)
}





