import { UserService } from "../services/User.service.js";
import jwt_token from "../utils/jwt.util.js";

const   JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";


export class UserController {
    constructor() {
        this.service = new UserService();
        this.jwt = new jwt_token();
    }

    async userSignUp(req, res) {
        const { roll, name, email, contact, room, hostel } = req.body;

        const user = await this.service.createUser(roll, name, email, contact, room, hostel);   
        if(!user) {
            return res.status(400).json({ message: "Invalid user data" });
        }

        return res.status(201).json(user);
    }

    async userLogin(req, res) {
        const { roll, password } = req.body;

        const user = await this.service.fetchUserByRoll(roll);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if(password !== user.password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const accessToken = this.jwt.generateToken({ roll: user.roll }, JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = this.jwt.generateToken({ roll: user.roll }, JWT_SECRET, { expiresIn: '7d' });
        return res.status(200).json({ tokens: { accessToken, refreshToken } });
    }

}