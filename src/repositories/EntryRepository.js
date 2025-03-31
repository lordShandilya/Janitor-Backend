import { Entry } from "../models/Entry.js";
import { pool } from "../config/db.js";

export class EntryRepository {

    async createEntry(id) {
        const query = `
            INSERT INTO entries (id)
            VALUES ($1)
            RETURN exit;
        `;
        try {
            const rows = await pool.query(query, [id]);
            const exitTime = rows[0];
            return new Entry(id, null, exitTime);
        } catch(err) {
            console.log('Error while creating entry in db: ', err.stack)
            return null;
        }
    }

    async updateUnresolvedEntry(id) {
        const query = `
            UPDATE entries
            SET entry = CURRENT_TIMESTAMP
            WHERE id = $1 AND entry IS NULL;
        `;

        try {
            await pool.query(query, [id]);
            
        } catch (err) {
            console.log('Error while updating unresolved entry: ', err.stack);
            return null;
        }
    }

    async findUnresolvedEntry(id) {
        const query = `
            SELECT *
            FROM entries
            WHERE id = $1 AND entry IS NULL;
        `;

        try {
            const { rows } =  await pool.query(query, [id]);
            if(rows.length === 0) return null;
            const row = rows[0];
            return new Entry(row.id, row.entry, row.exit);

        } catch (err) {
            console.log('Error while searching for unresolved entry: ', err.stack);
        }

    }

    async deleteEntry(id) {
        const query = `
            DELETE FROM entries
            WHERE id = $1;
        `;
        await pool.query(query, [id]);
    }
}