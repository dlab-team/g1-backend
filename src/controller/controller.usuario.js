import { pool } from '../db'; 
import { usuarioSchema } from '../components/schema'; 
import crypto from 'crypto'; 


export const agregarUsuario = async (req, res) => {
  
  const validation = usuarioSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({error:JSON.parse(result.error.message)});
  }

  // Extraer los datos validados
  const { nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña } = validation.data;

  // Generar un ID único para el usuario
  const id = crypto.randomUUID();

  try {
    // Insertar los datos en la base de datos
    const result = await pool.query(
      'INSERT INTO Usuarios (id, nombre, apellido, correo, pais, educacion, cargo, experiencia, contraseña) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [id, nombre, apellido, correo, pais, educacion, cargo, experiencia]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


