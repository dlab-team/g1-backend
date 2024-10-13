import * as metrics from '../models/metrics.models.js';

// Obtener las métricas
export const getMetrics = async (req, res) => metrics.getMetricsData()
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message }));

// Obtener objetivos de un usuario específico
export const getUserObjectives = async (req, res) => metrics.getUserObjectives(req.query.id)
  .then((data) => res.status(200).json(data))
  .catch((error) => res.status(500).json({ error: error.message }));
