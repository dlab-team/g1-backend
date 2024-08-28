import express from 'express';
import chalk from 'chalk';
import rutas from './rutas/rutas.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())
app.use("/", rutas)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.blue('        🔥  Server On  🔥'));
  console.log(chalk.grey(`Click to open: ${chalk.underline(`http://localhost:${PORT}`)}`));
});
