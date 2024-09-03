import express from "express"
import { usuariosLog} from "../middleware/usuarios.middelware.js";
import {
agregarUsuario,
verUsuario,
verTodoLosUsuarios,
actualizarUsuario 
}  from "../controllers/controller.usuario.js"

const router = express.Router();

router.get('/usuario/:id',usuariosLog,verUsuario)
router.get('/usuario/listado',usuariosLog,verTodoLosUsuarios)
router.post('/usuario/newUsuario',usuariosLog,agregarUsuario)
router.patch('/usuario/update/:id',usuariosLog,actualizarUsuario)

export default router;
