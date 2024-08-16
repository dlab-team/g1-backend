import { Pool } from 'pg'
require('dotenv').config()

const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT,
    allowExitOnIdle: true,
    max: 10, 
    idleTimeoutMillis: 30000
})

export default pool