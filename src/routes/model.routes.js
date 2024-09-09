import { Router } from 'express'
// import { fetchAndSaveCountries } from '../controllers/model.controller.js'
import { Router } from 'express';
import { autorizacionUsuario, autorizacionAdmin } from '../middleware/middleware_verify.js'
import * as empleos from '../controllers/empleos.controller.js'
import * as actividades from '../controllers/actividades.controller.js'
import { credenciales } from '../controllers/login.controller.js'
import { usuariosLog} from "../middleware/usuarios.middelware.js";

const router = Router();

router.get('/paises/fetch', autorizacionUsuario)

router.route('/empleos')
.get(autorizacionUsuario, empleos.getEmpleosPorId)
.post(autorizacionUsuario, empleos.postInsertEmpleos)
.delete(autorizacionUsuario, empleos.deleteEmpleos)

router.route('/actividades')
.get(autorizacionUsuario, actividades.getActividadesPorId)
.post(autorizacionUsuario, actividades.postInsertActividad)
.delete(autorizacionUsuario, actividades.deleteActividad)

router.route('/login')
.get(usuariosLog, credenciales)

export default router
