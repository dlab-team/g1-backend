import { pool } from "../../database/config.js";

// Crear un nuevo objetivo
export const createObjetivo = async (nombre, estado) =>{

    const query = `INSERT INTO objetivos (nombre) VALUES ($1) RETURNING *`;
    const values = [nombre];
    const result = await pool.query(query, values);
    return result.rows[0];

}

// Obtener todas las empresas
export const findObjetivo = async () =>{

    const query = `SELECT * FROM objetivos`;
    const result = await pool.query(query);
    return result.rows;

}

// Actualizar estado del objetivo
export const updateObjetivo = async (id, estado) =>{

    const query = `UPDATE objetivos SET estado = $1 WHERE id = $2 RETURNIG *`;
    const values = [id, estado];
    const result = await pool.query(query, values);
    return result.rows[0];

}

// Eliminar una empresa
export const deleteObjetivo = async (id) => {
    
    const query = `DELETE FROM objetivos WHERE id= $1`;
    const values = [id];
    await pool.query(query, values);
    return {message: 'Empresa eliminada exitosamente'};

}