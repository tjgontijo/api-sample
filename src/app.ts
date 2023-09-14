import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'
import cors from '@fastify/cors'

export const app = fastify()

app.register(appRoutes)

app.register(cors,{
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
})

app.setErrorHandler((error, _, reply) => {

    if (error instanceof ZodError){
        return reply
            .status(400)
            .send({
                message: 'Validation error.',
                issues: error.format()
            })
    }

    if( env.NODE_ENV != 'production'){
        console.error(error)
    } else {
        // TODO: Implements external log
    }

    return reply
        .status(500)
        .send({
            Message: 'Internar server error.'
        })

})