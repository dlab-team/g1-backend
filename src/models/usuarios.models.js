import pool from '../../database/config.js'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

//Crear un nuevo Usuario
export const insertarUsuario = async (usuarioData) => {
    const id = crypto.randomUUID();
    const { nombre, apellido, correo, pais, educacion, cargo, experiencia, password } = usuarioData;
    const passwordEncriptada = bcrypt.hashSync(password)

    const query = `
      INSERT INTO Usuarios (id, nombre, apellido, correo, pais, educacion, cargo, experiencia, password) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
      RETURNING id, nombre, apellido, correo, pais, educacion, cargo, experiencia
    `;
  
    const values = [id, nombre, apellido, correo, pais, educacion, cargo, experiencia, passwordEncriptada];
  
    const result = await pool.query(query, values);
    return result.rows[0];
  };


//Ver informacion como Usuario
export const obtenerUsuarioPorId = async (id) => {
    const query = `
      SELECT id, nombre, apellido, correo, pais, educacion, cargo, experiencia
      FROM Usuarios
      WHERE id = $1
    `;

    const values = [id]

    const result = await pool.query(query, values)
    return result.rows[0]
  };


//Ver inforcion de usuarios como administrador
export const obtenerTodoLosUsuarios = async () => {
    const query = `
    SELECT id, nombre, apellido, correo, pais, educacion, cargo, experiencia
    FROM Usuarios
    `;

    const result = await pool.query(query)
    return result.rows;
}


//Actualizar datos por Usuario (nombre arreglado)
export const actualizarUsuarioPorId = async (id, usuarioData) => {
    const query = `
    UPDATE Usuarios
    SET nombre = $2, apellido = $3, correo = $4, pais = $5, educacion = $6, cargo = $7, experiencia = $8
    WHERE id = $1
    RETURNING nombre, apellido, correo, pais, educacion, cargo, experiencia
    `;

    const values = [id, nombre, apellido, correo, pais, educacion, cargo, experiencia];

    const result = await pool.query(query, values)
    return result.rows[0];
}
