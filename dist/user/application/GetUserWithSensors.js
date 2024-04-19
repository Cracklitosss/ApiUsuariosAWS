"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserWithSensors = void 0;
const User_1 = __importDefault(require("../domain/User"));
class GetUserWithSensors {
    async execute(userId) {
        try {
            const user = await User_1.default.findById(userId).populate('sensorData').exec();
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Error retrieving user with sensor data: ' + error.message);
            }
            else {
                throw new Error('Error retrieving user with sensor data: An unknown error occurred');
            }
        }
    }
}
exports.GetUserWithSensors = GetUserWithSensors;
