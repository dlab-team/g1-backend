import { insertarUsuario } from '../models/usuarios.models.js';
import { 
usuarioSchema, 
obtenerUsuarioPorId, 
obtenerTodoLosUsuarios,
actualizarUsuarioPorId 
} from '../schemas/schema.usuario.js';


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

export const verUsuario = async (req, res) => {
  const { id } = req.params;

  try{
    const usuario = await obtenerUsuarioPorId(id);
    if(!usuario) {
      return res.status(400).json({message: "Usuario no encontrado"})
    }
    res.status(200).json(usuario);

  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


export const verTodoLosUsuarios = async (req, res) => {
  try{
    const usuarios = await obtenerTodoLosUsuarios();
    res.status(200).json(usuarios);
  } catch (error){
    res.status(500).json({message: error.message})
  }
}

export const actualizarUsuario = async (req,res) => {
    const { id } = req.params;
    const usuarioData = req.body;
  
    try {
      const usuarioActualizado = await actualizarUsuarioPorId (id, usuarioData);
      if(!usuarioActualizado){
        return res.status(400).json({message: "Usuario no encontrado"})
      }
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
}

