import { UserRepository } from "../repositories/User.repository.js";
import { isValidEmail, isValidPhoneNumber, isValidRoll, isValidRoomNumber } from "../utils/validation.util.js";

export class UserService {
    constructor() {
        this.repo = new UserRepository();
    }

    async createUser(roll, name, email, contact, room, hostel) {
        if(!(isValidEmail(email) && isValidRoll(roll) && isValidPhoneNumber(contact) && isValidRoomNumber(room))) return false;

        const user = await this.repo.createUser(roll, name, email, contact, room, hostel);
        if(!user) return null;
        return user;
    }

    async verifyUser(roll) {
        const user = await this.repo.getUserByRoll(roll);
        if(!user) return null;
        user.verified = true;
        await this.repo.updateUser(user);
        return user;
    }
}