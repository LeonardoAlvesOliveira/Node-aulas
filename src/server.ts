import express, { Request, Response } from 'express'
import routes from './routes/index'
import routerAdm from './adm'

const server = express()

server.use(routes)
server.use(routerAdm)
server.use((req: Request, res: Response) => {
  res.status(404).send('Pagina não encontrada!')
})

server.listen(80)