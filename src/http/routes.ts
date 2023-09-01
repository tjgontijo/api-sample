import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { createThematicArea } from './controllers/create-thematic-area'
import { fetchThematicArea } from './controllers/fetch-thematic-areas'
import { fetchInstituitions } from './controllers/fetch-instituitions'
import { fetchStates } from './controllers/fetch-states'

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', register)
    app.post('/sessions', authenticate)
    app.post('/thematic_area', createThematicArea)
    app.get('/thematic_area', fetchThematicArea)
    app.get('/instituition', fetchInstituitions)
    app.get('/states', fetchStates)
}
