import { pool } from "../src/config/db.js";

const query = `
    CREATE TABLE entries (
        id INTEGER PRIMARY KEY,
        exit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        entry TIMESTAMP NULL
    );
`;

(async () => {
    try {
        console.log('Creating "entries" table...');
        await pool.query(query);
        console.log('Table "entries" created successfuly');
        
    } catch (err) {
        console.log('Error creating table', err.stack);
        
    } finally {
        await pool.end();
    }
})();