import { insertarUsuario } from '../models/usuarioModels.js';
import { usuarioSchema } from '../schemas/schema.usuario.js'; 

export const agregarUsuario = async (req, res) => {
  
  const validation = usuarioSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({error:JSON.parse(validation.error.message)});
  }

  try {
    const nuevoUsuario = await insertarUsuario(validation.data);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


