import express, { Express, Request, Response } from "express"

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>this is express + ts app</h1>
    `)
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})