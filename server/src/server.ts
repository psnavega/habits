import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from './routes'

const app = fastify()

app.register(cors)
app.register(appRoutes)

app.get('/', async () => {
    const habits = await prisma.habit.findMany({})

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server HTTP started!')
})

