"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdController = void 0;
class GetUserByIdController {
    getUserById;
    constructor(getUserById) {
        this.getUserById = getUserById;
    }
    async handle(req, res) {
        try {
            const user = await this.getUserById.execute(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
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
exports.GetUserByIdController = GetUserByIdController;
