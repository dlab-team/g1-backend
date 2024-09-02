import { verificarCredenciales } from '../models/login.models.js'

export const credenciales = (req, res) => verificarCredenciales(req.body)
  .then((token) => res.status(200).json({ token }))
  .catch((error) => res.status(500).json(error)
  )