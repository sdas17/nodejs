import express from 'express'
import { registerController } from '../controllers/authController.js'

const router = express.Router()

//ROUTER
router.post('/register',registerController)
router.get('/register',registerController)


export default router