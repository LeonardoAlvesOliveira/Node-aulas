import { Router, Request, Response } from 'express'
const rounter = Router()

rounter.get('/', (req: Request, res: Response) => {
  let age: number = 28
  let showOld: boolean = false
  if (age > 50) {
    showOld = true
  }
  res.render('pages/home', {
    name: 'testador',
    lastName: 'master',
    showOld,
    products: [
      { title: 'ovo', price: 10 },
      { title: 'leite', price: 24 },
      { title: 'nescau', price: 12 }
    ],
    dayPhrase: [
      // 'qwertyuiop',
      // 'asdfghjklç',
      // 'zxcvbnm',
    ]
  })
})
rounter.get('/contact', (req: Request, res: Response) => {
  res.render('pages/contact')
})
rounter.get('/about', (req: Request, res: Response) => {
  res.render('pages/about')
})
export default rounter