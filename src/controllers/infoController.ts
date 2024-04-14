import { Request, Response } from "express";

export const contact = (req: Request, res: Response) => {
  res.render('pages/contact')
}
export const about = (req: Request, res: Response) => {
  res.render('pages/about')
}