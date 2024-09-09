import express from "express"
import { usuariosLog} from "../middleware/usuarios.middelware.js";
import {
agregarUsuario,
verUsuario,
verTodoLosUsuarios,
actualizarUsuario,
restaurarContraseña 
}  from "../controllers/usuario.controller.js"

const router = express.Router();

router.get('/usuario/:id',usuariosLog,verUsuario)
router.get('/usuarios/listado',usuariosLog,verTodoLosUsuarios)
router.post('/usuario/newUsuario',usuariosLog,agregarUsuario)
router.patch('/usuario/update/:id',usuariosLog,actualizarUsuario)
router.patch('/usuario/restore-password/:id', usuariosLog, restaurarContraseña);

export default router;
