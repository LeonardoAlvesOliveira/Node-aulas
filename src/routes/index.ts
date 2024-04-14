import { Router, Request, Response } from 'express'
const rounter = Router()

rounter.get('/', (req: Request, res: Response) => {

  res.render('home', {
    name: 'testador',
    lastname: 'master'
  })
})
rounter.get('/contact', (req: Request, res: Response) => {
  res.send('Formulario de contato')
})
rounter.get('/about', (req: Request, res: Response) => {
  res.send('Lorem Ipsum ')
})
export default rounter