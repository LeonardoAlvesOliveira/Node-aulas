import { Router, Request, Response } from "express";
const routerAdm = Router()

routerAdm.get('/adm', (req: Request, res: Response) => {
  res.send('pag de ADM')
})
export default routerAdm