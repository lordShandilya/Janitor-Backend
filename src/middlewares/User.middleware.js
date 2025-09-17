import jwt_token from '../utils/jwt.util.js';
import { isValidEmail, isValidPhoneNumber, isValidRoll, isValidRoomNumber } from '../utils/validation.util.js';

const JWT_SECRET = process.env.JWT_SECRET|| 'default_jwt_secret';

class UserMiddleware {
    constructor(userService, jwt_token) {
        this.userService = userService;
        this.jwt_token = jwt_token;
    }

    static validateUserData(req, res, next) {
        const { username, email } = req.body;

        if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required.' });
        }

        if (typeof username !== 'string' || typeof email !== 'string') {
        return res.status(400).json({ error: 'Username and email must be strings.' });
        }

        if(!(isValidEmail(email) && isValidRoll(roll) && isValidPhoneNumber(contact) && isValidRoomNumber(room))) {
        return res.status(400).json({ error: 'Invalid user data format.' });
    }   

    next();
    }

    static authenticateUser(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ error: 'No token provided.' });
    }

    try {
      const decoded = jwt_token.verifyToken(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token.' });
    }
  }
}

export default UserMiddleware;