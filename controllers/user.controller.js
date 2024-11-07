import { handleRequest } from "../utils/handleRequest.js";
import { UserModel } from "../models/user.model.js";

export class UserController {
    static async registerUser(req, res) {
        const { first_name, last_name, email, password, role_id } = req.body;
        await handleRequest(UserModel.createUser, [first_name, last_name, email, password, role_id], res);
    }
}
