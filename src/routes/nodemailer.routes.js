import {Router} from "express"
import { nodemailerForm } from "../controllers/nodemailer.controller"

const router = Router()

router.post('/send-email', nodemailerForm)

export default router