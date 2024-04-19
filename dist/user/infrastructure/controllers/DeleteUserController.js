"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    deleteUser;
    constructor(deleteUser) {
        this.deleteUser = deleteUser;
    }
    async handle(req, res) {
        try {
            const result = await this.deleteUser.execute(req.params.id);
            if (!result) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(204).json();
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
exports.DeleteUserController = DeleteUserController;
