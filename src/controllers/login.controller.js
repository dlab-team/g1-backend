import { verificarCredenciales } from '../models/login.models.js'

export const credenciales = (req, res) => verificarCredenciales(req.body)
  .then((token) => res.status(200).json({ token }))
  .catch((error) => {
    if (error.message === 'Email o contraseña incorrecta') {
      return res.status(401).json({ error: error.message })
    }
    res.status(500).json(error)}
  )