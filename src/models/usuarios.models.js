import pool from '../../database/config.js'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

// Crear un nuevo Usuario
export const insertarUsuario = async (usuarioData) => {
  const id = crypto.randomUUID()
  const { firstName, lastName, email, country, education, jobTitles, experience, password } = usuarioData
  const saltRounds = 10
  const passwordEncriptada = await bcrypt.hash(password, saltRounds)

  const query = `
      INSERT INTO usuarios (id, nombre, apellido, correo, pais, educacion, cargo, experiencia, password, rol_id) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
      RETURNING id, nombre, apellido, correo, pais, educacion, cargo, experiencia
    `

  const values = [id, firstName, lastName, email, country, education, jobTitles, experience, passwordEncriptada, 2]

  await pool.query(query, values)
  return true
}

// Ver informacion como Usuario
export const obtenerUsuarioPorId = async (id) => {
  const query = `
      SELECT id, nombre, apellido, correo, pais, educacion, cargo, experiencia, fono
      FROM usuarios
      WHERE id = $1
    `

  const values = [id]

  const result = await pool.query(query, values)
  return result.rows[0]
}

// Ver inforcion de usuarios como administrador
export const obtenerTodoLosUsuarios = async () => {
  const query = `
    SELECT id, nombre, apellido, creado_en, correo, pais, educacion, cargo, experiencia, rol_id
    FROM usuarios
    `
  const result = await pool.query(query)
  return result.rows
}

// Actualizar datos por Usuario (nombre arreglado)
export const actualizarDatosPorId = async (id, usuarioData) => {
  const { nombre, apellido, correo, pais, educacion, cargo, experiencia } = usuarioData
  const query = `
    UPDATE usuarios
    SET nombre = $2, apellido = $3, correo = $4, pais = $5, educacion = $6, cargo = $7, experiencia = $8
    WHERE id = $1
    RETURNING nombre, apellido, correo, pais, educacion, cargo, experiencia
    `

  const values = [id, nombre, apellido, correo, pais, educacion, cargo, experiencia]

  const result = await pool.query(query, values)
  return result.rows[0]
}

// Actualizar contraseña
export const actualizarContraseñaPorId = async (id, nuevaContraseña) => {
  const query = `
  UPDATE usuarios
  SET password = $2
  WHERE id = $1
  RETURNING id, nombre, apellido, correo, pais, educacion, cargo, experiencia
  `

  const values = [id, nuevaContraseña]

  const result = await pool.query(query, values)
  return result.rows[0]
}

// Obtener experiencia del usuario

export const obtenerExerienciaPorId = async (id) => {
  const query = `
      SELECT id, titulo, descripcion, desde, hasta
      FROM experiencia
      WHERE usuario_id = $1
    `

  const values = [id]

  const result = await pool.query(query, values)
  return result.rows[0]
}
export const nuevaExperiencia = async (id, usuarioData) => {
  const { titulo, descripcion, desde, hasta } = usuarioData

  const query = `
      INSERT INTO experiencia (usuario_id, titulo, descripcion, desde, hasta)
      VALUES ($1, $2, $3, $4) 
    `

  const values = [id, titulo, descripcion, desde, hasta]

  await pool.query(query, values).then((result) => { if (result) return true })
}
