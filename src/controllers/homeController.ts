import { Request, Response } from "express"
import { Product } from '../models/Product'

export const home = (req: Request, res: Response) => {
  let age: number = 28
  let showOld: boolean = false
  if (age > 50) {
    showOld = true
  }
  let list = Product.getAll()
  let expensiveList = Product.getPriceAfter(10)

  res.render('pages/home', {
    name: 'testador',
    lastName: 'master',
    showOld,
    products: list,
    expensive: expensiveList,
    dayPhrase: []
  })
}