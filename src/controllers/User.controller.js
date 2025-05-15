import { UserService } from "../services/User.service.js";


export class UserController {
    constructor() {
        this.service = new UserService();
    }

    async createUser(req, res, next) {
        const [roll, name, email] = req.params;
        
    }
}