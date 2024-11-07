import { query } from "../database/connection.js";

export class OrderItemModel {
    static async addItem(orderId, productId, quantity, price) {
        return await query(`
            INSERT INTO order_item (order_id, product_id, quantity, price)
            VALUES ($1, $2, $3, $4)`, [orderId, productId, quantity, price]);
    }
}
