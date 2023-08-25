import { ThematicAreaAlreadyExistsError } from '@/use-cases/errors/thematic-area-already-exists'
import { makeCreateThematicAreaUseCase } from '@/use-cases/factories/make-create-thematic-areas-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createThematicArea(request: FastifyRequest, reply: FastifyReply) {
    const createThematicAreasBodySchema = z.object({
        short_name: z.string(),
        name: z.string(),
    })

    const { short_name, name } = createThematicAreasBodySchema.parse(request.body)

    try {

        const CreateThematicAreaUseCase = makeCreateThematicAreaUseCase()

        await CreateThematicAreaUseCase.handle({
            short_name,
            name,
        })
    } catch (err) {
        if (err instanceof ThematicAreaAlreadyExistsError) {
            return reply.status(409).send({ message: err.message })
        }
        throw err
    }

    return reply.status(201).send()
}
