import { fastify } from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Exercitar'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('Server HTTP started!')
})

