import express from 'express';
import chalk from 'chalk';

const app = express();




app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(chalk.blue('        🔥  Server On  🔥'));
  console.log(chalk.grey(`Click to open: ${chalk.underline(`http://localhost:${PORT}`)}`));
});
