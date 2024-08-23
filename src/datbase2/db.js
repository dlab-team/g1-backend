import 'dotenv/config';
import pkg from 'pg';
const {Pool} = pkg;


const config = {
    
user:process.env.DB_USER,
host:process.env.DB_HOST,
database:process.env.DB_DATABASE,
password:process.env.DB_PASSWORD,
port:parseInt(process.env.DB_PORT, 10), 
allowExitOnIdle: true
}

const pool = new Pool(config)

export default pool;