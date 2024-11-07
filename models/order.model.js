import { query } from "../database/connection.js";
import { OrderDetailModel } from "./orderDetail.model.js";
import { OrderItemModel } from "./orderItem.model.js";
import { ProductModel } from "./product.model.js";

export class OrderModel {
    static async createOrder(userId, products) {
        // Paso 1: Crear la orden inicial con total 0
        const orderResult = await OrderDetailModel.createOrder(userId);
        const orderId = orderResult.rows[0].id;
        let total = 0;

        // Paso 2: Agregar los items de la orden y calcular el total
        for (const product of products) {
            const { product_id, quantity } = product;

            // Obtener el precio de cada producto
            const price = await ProductModel.getPrice(product_id);
            const subtotal = price * quantity;
            total += subtotal;

            // Agregar el item a la orden
            await OrderItemModel.addItem(orderId, product_id, quantity, price);
        }

        // Paso 3: Actualizar el total de la orden
        await OrderDetailModel.updateTotal(orderId, total);

        return { orderId, total };
    }
}
