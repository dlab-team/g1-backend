import { pool } from '../../database/config.js'; 
import crypto from 'crypto'; 

export const insertarUsuario = async (usuarioData) => {
    const id = crypto.randomUUID();
    const { nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña } = usuarioData;
  
    const query = `
      INSERT INTO Usuarios (id, nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING id, nombre, apellido, correo, pais, educacion, cargo, experiencia
    `;
  
    const values = [id, nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña];
  
    const result = await pool.query(query, values);
    return result.rows[0];
  };