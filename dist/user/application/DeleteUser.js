"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
const User_1 = __importDefault(require("../domain/User"));
class DeleteUser {
    async execute(userId) {
        try {
            const result = await User_1.default.findByIdAndDelete(userId);
            if (!result) {
                throw new Error('User not found');
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Error deleting user: ' + error.message);
            }
            else {
                throw new Error('Error deleting user: An unknown error occurred');
            }
        }
    }
}
exports.DeleteUser = DeleteUser;
