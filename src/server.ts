import express, { Request, Response } from 'express'
import path from 'path'
import mustache from 'mustache-express'
import routes from './routes/index'

const server = express()


server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())


server.use('/static', express.static(path.join(__dirname, '../public')))

server.use(routes)

server.use((req: Request, res: Response) => {
  res.status(404).send('Pagina não encontrada!')
})

server.listen(80)