import { Router } from 'express'
import { autorizacionUsuario, autorizacionAdmin } from '../middleware/middleware_verify.js'
import * as empleos from '../controllers/empleos.controller.js'
import * as actividades from '../controllers/actividades.controller.js'
import { credenciales } from '../controllers/login.controller.js'
import { usuariosLog } from '../middleware/usuarios.middelware.js'
import { getMetrics } from '../controllers/metrics.controller.js'
import {
  agregarUsuario,
  verUsuario,
  verTodoLosUsuarios,
  actualizarUsuario,
  restaurarContraseña,
  experiencieById,
  agregarNuevaExperiencia
} from '../controllers/controller.usuario.js'

const router = Router()

/**
 * @swagger
 * /empleos:
 *   get:
 *     summary: Obtiene empleos por ID de usuario
 *     tags: [Empleos]
 *     responses:
 *       200:
 *         description: Lista de empleos del usuario
 *   post:
 *     summary: Inserta un nuevo empleo
 *     tags: [Empleos]
 *     responses:
 *       201:
 *         description: Empleo creado correctamente
 *   delete:
 *     summary: Elimina un empleo por ID
 *     tags: [Empleos]
 *     responses:
 *       200:
 *         description: Empleo eliminado correctamente
 */
router.route('/jobs')
  .get(autorizacionUsuario, empleos.getEmpleosPorId)
  .post(autorizacionUsuario, empleos.postInsertEmpleos)
  .put(autorizacionUsuario, empleos.putInsertEmpleos)
  .delete(autorizacionUsuario, empleos.deleteEmpleos)

/**
 * @swagger
 * /actividades:
 *   get:
 *     summary: Obtiene actividades por ID de usuario
 *     tags: [Actividades]
 *     responses:
 *       200:
 *         description: Lista de actividades del usuario
 *   post:
 *     summary: Inserta una nueva actividad
 *     tags: [Actividades]
 *     responses:
 *       201:
 *         description: Actividad creada correctamente
 *   delete:
 *     summary: Elimina una actividad por ID
 *     tags: [Actividades]
 *     responses:
 *       200:
 *         description: Actividad eliminada correctamente
 */
router.route('/activities')
  .get(autorizacionUsuario, actividades.getActividadesPorId)
  .post(autorizacionUsuario, actividades.postInsertActividad)
  .delete(autorizacionUsuario, actividades.deleteActividad)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Inicia sesión de un usuario
 *     tags: [Login]
 *     responses:
 *       200:
 *         description: Usuario autenticado correctamente
 *       401:
 *         description: Credenciales inválidas
 */
router.route('/login')
  .post(usuariosLog, credenciales)

/**
 * @swagger
 * /metrics:
 *   get:
 *     summary: Obtiene métricas generales
 *     tags: [Métricas]
 *     responses:
 *       200:
 *         description: Métricas obtenidas correctamente
 */
router.get('/metrics', autorizacionUsuario, getMetrics)

/**
 * @swagger
 * /usuario/{id}:
 *   get:
 *     summary: Obtiene los detalles de un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Detalles del usuario obtenidos correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/user/:id', usuariosLog, verUsuario)

/**
 * @swagger
 * /usuario/listado:
 *   get:
 *     summary: Obtiene el listado de todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente
 */
router.get('/user/list', autorizacionAdmin, verTodoLosUsuarios)

/**
 * @swagger
 * /usuario/exeriencia:
 *   get:
 *     summary: Obtiene la experiencia de un usuario para su perfil
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Experiencia del usuario obtenida correctamente
 */
router.route('/user/experience')
  .get(usuariosLog, experiencieById)
  .post(usuariosLog, agregarNuevaExperiencia)

/**
 * @swagger
 * /usuario/newUsuario:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
router.post('/user/newUser', usuariosLog, agregarUsuario)

/**
 * @swagger
 * /usuario/update/{id}:
 *   patch:
 *     summary: Actualiza los datos de un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Datos del usuario actualizados correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.patch('/user/update/:id', usuariosLog, actualizarUsuario)

/**
 * @swagger
 * /usuario/restore-password/{id}:
 *   patch:
 *     summary: Restaura la contraseña de un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Contraseña restaurada correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.patch('/user/restore-password/:id', usuariosLog, restaurarContraseña)

export default router
