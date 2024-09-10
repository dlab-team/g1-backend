import * as actividades from '../models/aplicaciones.models.js'

export const getActividadesPorId = async (req, res) => actividades.todosAplicacionesPorUsuario(req.query.id)
.then((data) => res.status(200).json(data))
.catch((error) => res.status(500).json({ error: error.message })
)

export const postInsertActividad = async (req, res) => actividades.insertAplicacion(req.body.data)
.then((data) => res.status(200).json(data))
.catch((error) => res.status(500).json({ error: error.message })
)

export const deleteActividad = async (req, res) => actividades.borrarAplicacion(req.query.id)
.then((data) => res.status(200).json(data))
.catch((error) => res.status(500).json({ error: error.message })
)