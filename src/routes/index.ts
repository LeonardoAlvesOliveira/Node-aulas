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
    dayPhrase: []
  })
})
rounter.get('/contact', (req: Request, res: Response) => {
  res.render('pages/contact')
})
rounter.get('/about', (req: Request, res: Response) => {
  res.render('pages/about')
})

rounter.get('/name', (req: Request, res: Response) => {

  let name: string = req.query.name as string
  let age: string = req.query.age as string

  res.render('pages/name', {
    name,
    age
  })
})
rounter.get('/age', (req: Request, res: Response) => {
  let mostrarIdade: boolean = false
  let idade: number = 0

  if (req.query.ano) {
    let anoNascimento: number = parseInt(req.query.ano as string)
    let anoAtual: number = new Date().getFullYear()
    let idade: number = anoAtual - anoNascimento
    mostrarIdade = true
  }
  res.render('pages/age', {
    idade,
    mostrarIdade
  })
})
export default rounter