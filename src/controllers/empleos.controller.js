import * as empleos from '../models/empleos.models.js'

export const getEmpleosPorId = async (req, res) => empleos.empleosPorUsuario(req.query.id)
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message })
  )

export const postInsertEmpleos = async (req, res) => empleos.insertEmpleo(req.body.task)
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message })
  )
export const putInsertEmpleos = async (req, res) => empleos.putEmpleo(req.body.task)
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message })
  )

export const deleteEmpleos = async (req, res) => empleos.deleteEmpleo(req.query.id)
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message })
  )
