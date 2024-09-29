import data from './query.js'
import crypto from 'crypto'

export const todosAplicacionesPorUsuario = async (id) => {
  try {
    const consulta = 'SELECT * FROM actividades WHERE usuario_id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}

export const todosAplicacionesPorEmpleo = async (id) => {
  try {
    const consulta = 'SELECT * FROM actividades WHERE empleo_id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}

export const insertAplicacion = async (datos) => {
  const { usuarioId, titulo, fechaInicio, fechaFin, categoria } = datos
  const id = crypto.randomUUID()
  try {
    const consulta = 'INSERT INTO actividades (id, usuario_id, categoria_id, fecha_inicio, fecha_fin, titulo);'
    const values = [id, usuarioId, categoria, fechaInicio, fechaFin, titulo]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}

export const borrarAplicacion = async (id) => {
  try {
    const consulta = 'DELETE from actividades WHERE id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {

  }
}
