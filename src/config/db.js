import pkg from "pg";

const { Pool } = pkg;
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5431
})

