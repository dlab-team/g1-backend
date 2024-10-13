import express from "express"
import { changePass } from "../controllers/changepass.controller.js"

const router = express.Router()

router.put('/chage-password', changePass)

export default router