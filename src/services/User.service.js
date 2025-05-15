import { UserRepository } from "../repositories/User.repository";

export class UserService {
    constructor() {
        this.repo = new UserRepository();
    }

    async createUser(roll, name, email, contact, room, hostel) {
        // TODO 1: Verify if the roll number is of the correct form
        // TODO 2: Verify if the email provided is valid and send a verification mail to the email address
        // TODO 3: 
    }
}