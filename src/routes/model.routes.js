import { Router } from 'express'
// import { fetchAndSaveCountries } from '../controllers/model.controller.js'
import { autorizacionUsuario, autorizacionAdmin } from '../middleware/middleware_verify.js'
import * as empleos from '../controllers/empleos.controller.js'
import * as actividades from '../controllers/actividades.controller.js'
import { credenciales } from '../controllers/login.controller.js'
import { usuariosLog} from "../middleware/usuarios.middelware.js";
import {
agregarUsuario,
verUsuario,
verTodoLosUsuarios,
actualizarUsuario,
restaurarContraseña  
}  from "../controllers/controller.usuario.js"

const router = Router()

// router.get('/paises/fetch', autorizacionUsuario, fetchAndSaveCountries)

router.route('/empleos')
.get(autorizacionUsuario, empleos.getEmpleosPorId)
.post(autorizacionUsuario, empleos.postInsertEmpleos)
.delete(autorizacionUsuario, empleos.deleteEmpleos)

router.route('/actividades')
.get(autorizacionUsuario, actividades.getActividadesPorId)
.post(autorizacionUsuario, actividades.postInsertActividad)
.delete(autorizacionUsuario, actividades.deleteActividad)

router.route('/login')
.post(usuariosLog, credenciales)

router.get('/usuario/:id',usuariosLog,verUsuario)
router.get('/usuario/listado',usuariosLog,verTodoLosUsuarios)
router.post('/usuario/newUsuario',usuariosLog,agregarUsuario)
router.patch('/usuario/update/:id',usuariosLog,actualizarUsuario)
router.patch('/usuario/restore-password/:id', usuariosLog, restaurarContraseña);

export default router


