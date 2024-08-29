import { pool } from "../../database/config.js";


// Obtener todas las objetivo GET
export const findObjetivo = async () =>{
    try {
        const query = `SELECT * FROM objetivos`;
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error("error al obtener los datos", error)
        throw error
    }    
}

// Crear un nuevo objetivo POST
export const createObjetivo = async (nombre, estado, tipo, objetivo, plazo) =>{
    try {
        const query = `INSERT INTO objetivos (nombre, estado, tipo, objetivo, plazo) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [nombre, estado, tipo, objetivo, plazo];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error al ingresar informacion", error);
        throw error;
    }    
}

// Actualizar estado del objetivo PUT
export const updateObjetivo = async (id, nombre, descripcion, instrucciones, tipo) =>{
    try {
        const query = `UPDATE objetivos SET (nombre, descripcion, instrucciones, tipo) VALUES ($2, $3, $4, $5) WHERE id = $1 RETURNING *`;
        const values = [id, nombre, descripcion, instrucciones, tipo];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Error al actualizar informacion", error);
        throw error;  
    }
    

}

// Eliminar una objetivo DELETE
export const deleteObjetivo = async (id) => {
    try {
        const query = `DELETE FROM objetivos WHERE id= $1`;
        const values = [id];
        await pool.query(query, values);
        return {message: 'objetivo eliminada exitosamente'};
    } catch (error) {
        console.error("Error al eliminar el objetivo", error);
        throw error;  
    }
    

}