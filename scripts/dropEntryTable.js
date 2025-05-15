import { pool } from "../src/config/db.js";

const query = `
    DROP TABLE entries;
`;

(async () => {
    try {
        console.log('Dropping "entries" table...');
        await pool.query(query);
        console.log('Table "entries" dropped successfuly');
        
    } catch (err) {
        console.log('Error dropping table', err.stack);
        
    } finally {
        await pool.end();
    }
})();