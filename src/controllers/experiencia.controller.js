import experienciaPorUsuario from '../models/experiencia.models.js'

export const getExperienciaPorId = async (req, res) => experienciaPorUsuario(req.query.id)
.then((data) => res.status(200).json(data))
.catch((error) => res.status(500).json({ error: error.message })
)