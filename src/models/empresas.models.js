const pool = require('../../database/config.js').default


// Crear una nueva empresa
const createEmpresa = async (nombre) =>{

    const query = `INSERT INTO empresas (nombre) VALUES ($1) RETURNING *`;
    const values = [nombre];
    const result = await pool.query(query, values);
    return result.rows[0];

}

// Obtener todas las empresas
const findEmpresa = async () =>{

    const query = `SELECT * FROM empresas`;
    const result = await pool.query(query);
    return result.rows;

}

// Actualizar una empresa
const updateEmpresa = async (id, nombre) =>{

    const query = `UPDATE empresas SET nombre = $1 WHERE id = $2 RETURNIG *`;
    const values = [nombre, id];
    const result = await pool.query(query, values);
    return result.rows[0];

}

// Eliminar una empresa
const deleteEmpresa = async (id) => {
    
    const query = `DELETE FROM empresas WHERE id= $1`;
    const values = [id];
    await pool.query(query, values);
    return {message: 'Empresa eliminada exitosamente'};

}

export default {createEmpresa, findEmpresa, updateEmpresa, deleteEmpresa};