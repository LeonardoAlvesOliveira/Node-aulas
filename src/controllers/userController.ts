import { Request, Response } from "express";

export const name = (req: Request, res: Response) => {

  let name: string = req.query.name as string
  let age: string = req.query.age as string

  res.render('pages/name', {
    name,
    age
  })
}

export const ageForm = (req: Request, res: Response) => {
  res.render('pages/age')
}
export const ageAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false
  let idade: number = 0

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string)
    let anoAtual: number = new Date().getFullYear()
    idade = anoAtual - anoNascimento
    mostrarIdade = true
  }
  res.render('pages/age', {
    idade,
    mostrarIdade
  })
}