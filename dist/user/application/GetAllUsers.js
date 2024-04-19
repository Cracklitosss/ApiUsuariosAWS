"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsers = void 0;
const User_1 = __importDefault(require("../domain/User"));
class GetAllUsers {
    async execute() {
        try {
            const users = await User_1.default.find({});
            return users;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error('Error retrieving users: ' + error.message);
            }
            else {
                throw new Error('Error retrieving users: An unknown error occurred');
            }
        }
    }
}
exports.GetAllUsers = GetAllUsers;
