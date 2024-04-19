"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryMongo = void 0;
const User_1 = __importDefault(require("../domain/User"));
class UserRepositoryMongo {
    async create(user) {
        const newUser = new User_1.default(user);
        await newUser.save();
        return newUser;
    }
    async findById(userId) {
        return User_1.default.findById(userId);
    }
    async findAll() {
        return User_1.default.find();
    }
    async update(userId, user) {
        const updatedUser = await User_1.default.findByIdAndUpdate(userId, user, { new: true });
        return updatedUser;
    }
    async deleteById(userId) {
        return User_1.default.findByIdAndDelete(userId);
    }
}
exports.UserRepositoryMongo = UserRepositoryMongo;
