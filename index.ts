import express, { Express, Request, Response } from "express"

import { PrismaClient } from '@prisma/client'
const prisma: PrismaClient = new PrismaClient()

const app: Express = express()

app.get('/', async (req: Request, res: Response) => {
    /*await prisma.categories.create({
        data: {
            name: 'Coffee'
        }
    })*/
    res.send(`
        <h1>this is express + ts app</h1>
    `)
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})
