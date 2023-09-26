import { makeCreatePlanUseCase } from '@/use-cases/factories/make-create-action-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function createPlan(request: FastifyRequest, reply: FastifyReply) {
    const createPlanBodySchema = z.object({
        state: z.string(),
        thematicArea: z.string(),
        year: z.string(),
        diagnosis: z.string(),
        justification: z.string(),
        generalGoal: z.string(),
        implementationStrategy: z.string(),
        diagnosticImplementationStrategy: z.string(),
        governanceImplementationStrategy: z.string(),
        capacityImplementationStrategy: z.string(),
        acquisitionImplementationStrategy: z.string(),
    })

    try {
        const {
            state,
            thematicArea,
            year,
            diagnosis,
            justification,
            generalGoal,
            implementationStrategy,
            diagnosticImplementationStrategy,
            governanceImplementationStrategy,
            capacityImplementationStrategy,
            acquisitionImplementationStrategy,
        } = createPlanBodySchema.parse(request.body)

        const createPlanUseCase = makeCreatePlanUseCase()

        const createPlanRequest = {
            stateId: state,
            thematicAreaId: thematicArea,
            year,
            diagnosis,
            justification,
            generalGoal,
            implementationStrategy,
            diagnosticImplementationStrategy,
            governanceImplementationStrategy,
            capacityImplementationStrategy,
            acquisitionImplementationStrategy,
        }

        await createPlanUseCase.handle(createPlanRequest)
    } catch (err) {
        if (err instanceof z.ZodError) {
            return reply.status(400).send({ message: err.message })
        } else {
            console.log(err)
            return reply.status(500).send({ message: 'Erro interno do servidor' })
        }
    }

    return reply.status(201).send()
}
