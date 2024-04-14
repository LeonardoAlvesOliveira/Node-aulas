import { Router, Request, Response } from 'express'
const rounter = Router()

rounter.get('/', (req: Request, res: Response) => {
  let age: number = 90
  let showOld: boolean = false
  if (age > 50) {
    showOld = true
  }
  res.render('home', {
    name: 'testador',
    lastName: 'master',
    showOld
  })
})
rounter.get('/contact', (req: Request, res: Response) => {
  res.send('Formulario de contato')
})
rounter.get('/about', (req: Request, res: Response) => {
  res.send('Lorem Ipsum ')
})
export default rounter