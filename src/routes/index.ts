import { Router, Request, Response } from 'express'
const rountes = Router()

rountes.get('/', (req: Request, res: Response) => {
  res.render('home')
})
rountes.get('/contact', (req: Request, res: Response) => {
  res.send('Formulario de contato')
})
rountes.get('/about', (req: Request, res: Response) => {
  res.send('Lorem Ipsum ')
})
export default rountes 