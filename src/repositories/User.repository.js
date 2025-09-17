import { User } from "../models/User.js";
import { pool } from "../config/db.js";

export class UserRepository {
    
    async createUser(roll, name, email, contact, room, hostel) {
        const query =  `
            INSERT INTO users (roll, name, email, contact, password)
            VALUES ($1, $2, $3, $4, $5);
        `;

        await pool.query(query, [roll, name, email, contact, password]);

        return new User(roll, name, email, contact, password)
    }

    async getUserByRoll(roll) {
        const query = `
            SELECT * FROM users
            WHERE roll = $1;
        `;

        const { rows } = await pool.query(query, [roll]);
        if(rows.length===0) return null;
        const row = rows[0];
        return new User(row.roll, row.name, row.email, row.contact, row.room, row.hostel);
    }

    async getAllUsers() {
        const query = `
            SELECT * FROM users;
        `;

        const { rows } = await pool.query(query);
        if(rows.length===0) return null;
        return rows.map(row => new User(row.roll, row.name, row.email, row.contact, row.room, row.hostel));
    }

    async updateUser(user) {
        const query = `
            UPDATE users
            SET verified = true
            WHERE roll = $6;
        `;

        await pool.query(query);
        return user;
    }
}