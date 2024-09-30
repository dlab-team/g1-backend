const pool = require('../../database/config.js').default

// Crear una nueva empresa
export const createEmpresa = async (nombre) => {
  try {
    const query = 'INSERT INTO empresas (nombre) VALUES ($1) RETURNING *'
    const values = [nombre]
    const result = await pool.query(query, values)
    return result.rows[0]
  } catch (error) {
    console.error('Error al crear nueva empresa', error)
    throw error
  }
}

// Obtener todas las empresas
export const findEmpresa = async () => {
  try {
    const query = 'SELECT * FROM empresas WHERE is_deleted = FALSE'
    const result = await pool.query(query)
    return result.rows
  } catch (error) {
    console.error('Error al actualizar informacion', error)
    throw error
  }
}

// Actualizar una empresa
export const updateEmpresa = async (id, nombre) => {
  try {
    const query = 'UPDATE empresas SET nombre = $1 WHERE id = $2 RETURNIG *'
    const values = [nombre, id]
    const result = await pool.query(query, values)
    return result.rows[0]
  } catch (error) {
    console.error('Error al actualizar informacion', error)
    throw error
  }
}

// Eliminar una empresa
export const deleteEmpresa = async (id) => {
  try {
    const query = 'UPDATE empresas SET is_deleted = TRUE WHERE id= $1'
    const values = [id]
    await pool.query(query, values)
    return { message: 'Empresa marcada como eliminada exitosamente' }
  } catch (error) {
    console.error('Error al realizar el soft delete', error)
    throw error
  }
}
