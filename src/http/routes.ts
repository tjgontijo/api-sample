import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { createThematicArea } from './controllers/create-thematic-area'
import { fetchThematicArea } from './controllers/fetch-thematic-area'

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', register)
    app.post('/sessions', authenticate)
    app.post('/thematic_area', createThematicArea)
    app.get('/thematic_area', fetchThematicArea)
}
