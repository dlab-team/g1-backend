import {
  insertarUsuario,
  obtenerUsuarioPorId,
  obtenerTodoLosUsuarios,
  actualizarDatosPorId,
  actualizarContraseñaPorId,
  obtenerExerienciaPorId,
  nuevaExperiencia
} from '../models/usuarios.models.js'
import { contraseñaSchema, validateUsuario } from '../schemas/schema.usuario.js'

export const agregarUsuario = async (req, res) => {
  const validation = validateUsuario(req.body)
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.errors })
  }

  try {
    const nuevoUsuario = await insertarUsuario(validation.data)
    res.status(201).json(nuevoUsuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const agregarNuevaExperiencia = async (req, res) => await nuevaExperiencia(req.body)
.then((data) => res.status(201).json(data)).catch((error) => res.status(500).json({ message: error.message }))

export const verUsuario = async (req, res) => {
  const { id } = req.params

  try {
    const usuario = await obtenerUsuarioPorId(id)
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const experiencieById = async (req, res) => {
  const { id } = req.params

  try {
    const usuario = await obtenerExerienciaPorId(id)
    if (!usuario) {
      return res.status(404).json({ message: 'Experiencia no encontrada' })
    }
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const verTodoLosUsuarios = async (req, res) => {
  try {
    const usuarios = await obtenerTodoLosUsuarios()
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const actualizarUsuario = async (req, res) => {
  const { id } = req.params
  const validation = validateUsuario(req.body)
  const usuarioData = req.body.datos
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors })
  }

  try {
    const usuarioActualizado = await actualizarDatosPorId(id, usuarioData)

    if (!usuarioActualizado) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }
    res.status(200).json(usuarioActualizado)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const restaurarContraseña = async (req, res) => {
  try {
    const { id } = req.params
    const { contraseña } = req.body

    // validando la contraseña de forma directa
    const result = contraseñaSchema.safeParse(contraseña)

    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors })
    }

    // Actualizando contraseña si pasa la validacion
    const usuarioActualizado = await actualizarContraseñaPorId(id, result.data)

    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json({ message: 'Contraseña actualizada exitosamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
