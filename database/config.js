import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})

pool.on('error', (err) => {
  console.error('Error en el pool de conexiones:', err)
})

export default pool
