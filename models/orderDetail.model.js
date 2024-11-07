import { query } from "../database/connection.js";

export class OrderDetailModel {
    static async createOrder(userId) {
        return await query(`
            INSERT INTO order_detail (user_id, total, status)
            VALUES ($1, 0.0, 0) RETURNING id`, [userId]);
    }

    static async updateTotal(orderId, total) {
        return await query(`UPDATE order_detail SET total = $1 WHERE id = $2`, [total, orderId]);
    }
}
