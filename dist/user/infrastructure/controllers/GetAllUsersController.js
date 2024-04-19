"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersController = void 0;
class GetAllUsersController {
    getAllUsers;
    constructor(getAllUsers) {
        this.getAllUsers = getAllUsers;
    }
    async handle(req, res) {
        try {
            const users = await this.getAllUsers.execute();
            return res.status(200).json(users);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            }
            else {
                return res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
exports.GetAllUsersController = GetAllUsersController;
