import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    constructor() {
        this.repo = new UserRepository();
    }

    async createUser(roll, name, email, contact, room, hostel) {
        // verify details before creating user
    }
}