import express, { Express, Request, Response } from "express"
import DBPos from "./db/dbPos"

const app: Express = express()
const dbPos: DBPos = new DBPos()

app.use(express.json())


app.get('/', async (req: Request, res: Response) => {
    res.send(`<h1>This is the main API routes</h1>`)
})

app.get('/positions', (req: Request, res: Response) => {

})

app.get('/positions/:id', (req: Request, res: Response) => {

})

app.post('/positions', (req: Request, res: Response) => {

})

app.put('/positions', (req: Request, res: Response) => {

})

app.delete('/positions', (req: Request, res: Response) => {

})

app.get('/categories', async (req: Request, res: Response) => {
    const categories = await dbPos.getAll()
    res.json(categories)
})

app.get('/category/:id', async (req: Request, res: Response) => {

})

app.post('/category', async (req: Request, res: Response) => {
    const isCreated = await dbPos.create({name: 'coffee'})
})

app.put('/category/:id', async (req: Request, res: Response) => {
    
})

app.delete('/category/:id', async (req: Request, res: Response) => {
    
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})
