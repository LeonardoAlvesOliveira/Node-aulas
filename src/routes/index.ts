import { Router, Request, Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
router.get('/contact', (req: Request, res: Response) => {
  res.send('Formulario de contato')
})
router.get('/about', (req: Request, res: Response) => {
  res.send('Lorem Ipsum ')
})
export default router 