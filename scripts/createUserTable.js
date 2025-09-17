import { pool } from "../src/config/db.js";


const query = `
    CREATE TABLE users (
        roll INTEGER PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        contact INTEGER UNIQUE NOT NULL,
        room VARCHAR(100) ,
        hostel VARCHAR(100),
        verified BOOLEAN DEFAULT false,
        password VARCHAR(100) NOT NULL DEFAULT 'default_password'
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