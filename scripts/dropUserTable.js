import { pool } from "../src/config/db.js";


const query = `
    DROP TABLE users;
`;

(async () => {
    try {
        console.log('Dropping "users" table...');
        await pool.query(query);
        console.log('Table "users" dropped successfuly');
        
    } catch (err) {
        console.log('Error dropping table', err.stack);
        
    } finally {
        await pool.end();
    }
})();