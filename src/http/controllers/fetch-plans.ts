import { makeFetchPlanUseCase } from '@/use-cases/factories/make-fetch-plans-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function fetchPlans(request: FastifyRequest, reply: FastifyReply) {
    
    const fetchPlans = makeFetchPlanUseCase()
    const plans = await fetchPlans.execute()
    
    return reply.status(200).send(plans)
}





