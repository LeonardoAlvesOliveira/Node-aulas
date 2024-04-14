import { Router } from 'express'
import *as HomeController from '../controllers/homeController'
import *as InfoController from '../controllers/infoController'
import *as UserController from '../controllers/userController'
const rounter = Router()

rounter.get('/', HomeController.home)
rounter.get('/contact', InfoController.contact)
rounter.get('/about', InfoController.about)

rounter.get('/name', UserController.name)
rounter.get('/age', UserController.ageForm)
rounter.post('/age', UserController.ageAction)

export default rounter