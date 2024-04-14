import express, { Request, Response } from 'express'
import path from 'path'
import routes from './routes/index'
import routerAdm from './adm'

const server = express()
console.log(path.join());


server.use('/static', express.static(path.join(__dirname, '../public')))
server.use(routes)
server.use(routerAdm)
server.use((req: Request, res: Response) => {
  res.status(404).send('Pagina não encontrada!')
})

server.listen(80)