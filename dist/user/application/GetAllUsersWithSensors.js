"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersWithSensors = void 0;
const User_1 = __importDefault(require("../domain/User"));
class GetAllUsersWithSensors {
    async execute() {
        try {
            return await User_1.default.find().populate('sensorData').exec();
        }
        catch (error) { // Asegúrate de especificar 'unknown' aquí
            if (error instanceof Error) {
                throw new Error('Error retrieving all users with sensor data: ' + error.message);
            }
            else {
                throw new Error('An unknown error occurred');
            }
        }
    }
}
exports.GetAllUsersWithSensors = GetAllUsersWithSensors;
