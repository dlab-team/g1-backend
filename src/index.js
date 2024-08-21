import express from 'express';
import dotenv from 'dotenv';
import paisesRoutes from './routes/model.routes.js';  

dotenv.config();

const app = express();

// Middleware para parsear JSON si es necesario
app.use(express.json());

// Rutas
app.use('/api', paisesRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.json({ message: 'API de Selección de Países' });
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
