import { query } from "../database/connection.js";

export class ProductModel {
    static async getPrice(productId) {
        const result = await query(`SELECT price FROM product WHERE id = $1`, [productId]);
        return result.rows[0]?.price;
    }
}
