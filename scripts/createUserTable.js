import { pool } from "../src/config/db.js";


const query = `
    CREATE TABLE users (
        roll INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        contact INTEGER UNIQUE NOT NULL,
        room INTEGER NOT NULL,
        hostel VARCHAR(100) NOT NULL,
        verified BOOLEAN
    );
`;

(async () => {
    try {
      console.log('Creating "users" table...');
      await pool.query(query);
      console.log('Table "users" created successfully!');
    } catch (err) {
      console.error('Error creating table:', err.stack);
    } finally {
      await pool.end(); 
    }
  })();