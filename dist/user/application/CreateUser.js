"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const User_1 = __importDefault(require("../domain/User"));
class CreateUser {
    encryptionService;
    constructor(encryptionService) {
        this.encryptionService = encryptionService;
    }
    async execute(userData) {
        try {
            const hashedPassword = await this.encryptionService.hashPassword(userData.password);
            const newUser = new User_1.default({
                email: userData.email,
                name: userData.name,
                password: hashedPassword,
                IdEsp: userData.IdEsp,
                ocupacion: userData.ocupacion,
                estado: userData.estado,
                sensorData: userData.sensorData
            });
            await newUser.save();
            return newUser;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Error creating user: ' + error.message);
            }
            else {
                throw new Error('Error creating user: An unknown error occurred');
            }
        }
    }
}
exports.CreateUser = CreateUser;
