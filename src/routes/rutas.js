import express from "express"
import {agregarUsuario}  from "../controllers/controller.usuario.js"
import { usuariosLog } from "../middleware/usuarios.middelware.js";

const router = express.Router();

//router.get('/',usuariosLog,)
router.post('/usuario/newUsuario',usuariosLog,agregarUsuario)

export default router;