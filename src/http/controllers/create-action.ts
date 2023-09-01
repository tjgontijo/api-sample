import { makeCreateActionUseCase } from '@/use-cases/factories/make-create-action-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createAction(request: FastifyRequest, reply: FastifyReply) {
    const createThematicAreasBodySchema = z.object({
        thematicAreaId: z.string(),
        short_name: z.string(),
        name: z.string(),
        description: z.string(),
    })

    const { thematicAreaId, short_name, name, description } = createThematicAreasBodySchema.parse(request.body)
    console.log(request.body)
    try {

        const createActionUseCase = makeCreateActionUseCase()

        await createActionUseCase.handle({
            thematicAreaId, 
            short_name, 
            name, 
            description
        })
    } catch (err) {
        if (err) {
            return reply.status(409).send({ message: err })
        }
        throw err
    }

    return reply.status(201).send()
}
