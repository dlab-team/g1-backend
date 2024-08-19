import { pool } from '../../database/config.js'; // Ajusta la ruta según la estructura real de tu proyecto

export const getPaises = async () => {
    try {
        const result = await pool.query('SELECT id, nombre FROM paises ORDER BY nombre ASC');
        return result.rows;
    } catch (error) {
        throw new Error('Error al obtener la lista de países');
    }
};