import express from "express"
import * as controller from "../controller/controller.usuario.js"
import { usuariosLog } from "../middleware/usuarios.middelware.js";

const router = express.Router();

router.post('/',usuariosLog,controller.agregarUsuario)

export default router;