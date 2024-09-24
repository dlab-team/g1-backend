import express from 'express'
import { verifyToken } from '../controllers/controller.restPasword.js'

const router = express.Router()

router.get('/verify-token', verifyToken)


export default router