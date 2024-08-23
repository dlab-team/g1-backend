import { pool } from "../../database/config";

// Obtener Educacion
const callEducacion = async () =>{

    const query = `SELECT * FROM educacion`;
    const result = await pool.query(query);
    return result.rows;

}

export default {callEducacion}