"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const User_1 = __importDefault(require("../domain/User"));
class LoginUser {
    encryptionService;
    authService;
    webSocketService;
    constructor(encryptionService, authService, webSocketService) {
        this.encryptionService = encryptionService;
        this.authService = authService;
        this.webSocketService = webSocketService;
    }
    async execute(email, password) {
        try {
            const user = await User_1.default.findOne({ email });
            if (!user) {
                throw new Error('User not found');
            }
            const isPasswordValid = await this.encryptionService.comparePassword(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }
            const token = this.authService.generateToken(user);
            this.webSocketService.sendToken(token);
            return { user, token, }; //información del usuario se debe enviar al frontend
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Login error: ' + error.message);
            }
            else {
                throw new Error('Login error: An unknown error occurred');
            }
        }
    }
}
exports.LoginUser = LoginUser;
