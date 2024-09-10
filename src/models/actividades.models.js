import { pool } from "../../database/config.js";

// Crear una nueva actividad POST
export const createActividad = async (titulo, categoria_id, nota, fecha_inicio, fecha_fin, completado) =>{
    try {
        const query = `INSERT INTO actividades (titulo, categoria_id, nota, fecha_inicio, fecha_fin, completado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [titulo, categoria_id, nota, fecha_inicio, fecha_fin, completado];
        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {
        console.error("Error al crear una nueva actividad", error);
        throw error; 
    }  
}

// Obtener todas las Actividades GET
export const findObjetivo = async () =>{
    try {
        const query = `SELECT * FROM actividades`;
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("error al obtener los datos", error)
        throw error;
    }    
}

// Eliminar una Actividad Softdelete
export const deleteActividad = async (id) => {
    try {
        const query = `UPDATE actvidades SET is_deleted = TRUE WHERE id= $1`;
        const values = [id];
        await pool.query(query, values);
        return {message: 'Actvidad marcada como eliminada exitosamente'};
    } catch (error) {
        console.error("Error al realizar el soft delete", error);
        throw error; 
    }
}
