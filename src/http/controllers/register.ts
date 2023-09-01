import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        stateId: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { stateId , name, email, password } = registerBodySchema.parse(request.body)

    console.log(request.body)

    try {
        
        const registerUseCase = makeRegisterUseCase()

        await registerUseCase.handle({
            name,
            email,
            password,
            stateId
        })
            
    } catch (err) {

        if (err instanceof UserAlreadyExistsError){
            return reply.status(409).send({ message: err.message})
        }
        
        throw err
    }

    return reply.status(201).send()
}
