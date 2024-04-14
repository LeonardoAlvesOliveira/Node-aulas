import { Request, Response } from "express"

export const home = (req: Request, res: Response) => {
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
}