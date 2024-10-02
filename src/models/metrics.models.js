import { pool } from "../../database/config.js";

// Obtener datos de las métricas generales (Postulaciones, Entrevistas, Eventos)
export const getMetricsData = async () => {
  try {
    const postulacionesQuery =
      "SELECT COUNT(*) FROM empleos WHERE modalidad = $1";
    const entrevistasQuery =
      "SELECT COUNT(*) FROM empleos WHERE modalidad = $1";
    const eventosQuery = `
      SELECT COUNT(*) 
      FROM actividades 
      WHERE categoria_id = (SELECT id FROM categorias WHERE categoria = 'Networking')
    `;

    const postulaciones = await pool.query(postulacionesQuery, ["Postulación"]);
    const entrevistas = await pool.query(entrevistasQuery, ["Entrevista"]);
    const eventos = await pool.query(eventosQuery);

    return {
      postulaciones: postulaciones.rows[0].count,
      entrevistas: entrevistas.rows[0].count,
      eventos: eventos.rows[0].count,
    };
  } catch (error) {
    console.error("Error al obtener los datos de las métricas", error);
    throw error;
  }
};

// Obtener los objetivos de un usuario
export const getUserObjectives = async (userId) => {
  try {
    const query =
      "SELECT nombre, cumplimiento FROM objetivos WHERE usuario_id = $1";
    const result = await pool.query(query, [userId]);
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los objetivos del usuario", error);
    throw error;
  }
};
