import { handleRequest } from "../utils/handleRequest.js";
import { OrderModel } from "../models/order.model.js";

export class OrderController {
    static async createOrder(req, res) {
        const { user_id, products } = req.body;
        await handleRequest(OrderModel.createOrder, [user_id, products], res);
    }
}
