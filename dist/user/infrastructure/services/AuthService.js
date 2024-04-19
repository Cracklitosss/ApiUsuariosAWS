"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    secretKey = process.env.JWT_SECRET || '12345';
    expiration = process.env.JWT_EXPIRATION || '4h';
    generateToken(user) {
        const payload = {
            id: user._id,
            email: user.email,
            IdEsp: user.IdEsp
        };
        const token = jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: this.expiration });
        console.log("JWT Payload:", payload); // Mostrar el payload en la consola
        return token;
    }
    verifyToken(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, this.secretKey);
            console.log("Decoded JWT:", decoded);
            return decoded;
        }
        catch (error) {
            console.error("Error verifying token:", error);
            throw error;
        }
    }
}
exports.AuthService = AuthService;
