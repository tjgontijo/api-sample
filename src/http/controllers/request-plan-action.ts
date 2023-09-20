import { FastifyReply, FastifyRequest } from 'fastify'

export async function planAction(request: FastifyRequest, reply: FastifyReply) {
    
    const response = request.body
    console.log(response)
    return reply.status(200).send(response)
}





