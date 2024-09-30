import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import swaggerRouter from './swagger.js'; // Importar las rutas de Swagger
import router from './routes/model.routes.js'; // Importar las rutas principales
import nodemailerRotes from './routes/nodemailer.routes.js'
import resetPasswordRoutes from './routes/resetPassword.routes.js'
import chagePasswordRoutes from './routes/changepass.routes.js'

const app = express();

app.use(express.json());
app.use(cors());

// Integrar Swagger en /api-docs
app.use(swaggerRouter);

// Usar las rutas principales de la aplicación
app.use("/", router);

//rutas a utilizar nodemailer y para pass
app.use('/api', nodemailerRotes )
app.use('/api', resetPasswordRoutes)
app.use('/api', chagePasswordRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.blue('        🔥  Server On 🔥'));
  console.log(chalk.grey(`Click to open: ${chalk.underline(`http://localhost:${PORT}`)}`));
});
