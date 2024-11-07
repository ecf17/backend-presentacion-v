import { query } from "../database/connection.js";

export class UserModel {
    static async createUser(firstName, lastName, email, password, roleId) {
        return await query(`
            INSERT INTO "user" (first_name, last_name, email, password, role_id)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`, [firstName, lastName, email, password, roleId]);
    }
}
