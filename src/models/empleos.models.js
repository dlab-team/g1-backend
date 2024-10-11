import data from './query.js'

// devuelve todos los empleos
export const todosEmpleos = async () => {
  try {
    const consulta = 'SELECT * FROM empleos;'
    return await data(consulta)
  } catch (error) {
    return error
  }
}
export const empleosPorUsuario = async (id) => {
  try {
    const consulta = 'SELECT * FROM empleos WHERE usuario_id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}

// devuelve empleo por id
export const empleoById = async (id) => {
  try {
    const consulta = 'SELECT * FROM empleos WHERE id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}

// inserta empleo
export const insertEmpleo = async (datos) => {
  const { title, companyName, url, location, jobType, description, user, list } = datos
  const consulta = 'INSERT INTO empleos (cargo, descripcion, ubicacion, modalidad, nombre_empresa, url, lista_id, usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);'
  const values = [title, description, location, jobType, companyName, url, list, user]
  await data(consulta, values)
  return true
}

// borra empleo por id
export const deleteEmpleo = async (id) => {
  try {
    const consulta = 'DELETE from empleos WHERE id = $1;'
    const values = [id]
    return await data(consulta, values)
  } catch (error) {
    return error
  }
}
