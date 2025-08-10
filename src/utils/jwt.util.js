import { jwt } from "jsonwebtoken";

class jwt_token {
    static generateToken(payload, secret, options) {
        return jwt.sign(payload, secret, options);
    }
    
    static verifyToken(token, secret) {
        try {
        return jwt.verify(token, secret);
        } catch (error) {
        throw new Error("Invalid token");
        }
    }
    
    static decodeToken(token) {
        return jwt.decode(token);
    }
}

export default jwt_token;
