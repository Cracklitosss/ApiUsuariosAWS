"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    createUser;
    constructor(createUser) {
        this.createUser = createUser;
    }
    async handle(req, res) {
        try {
            const user = await this.createUser.execute(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ error: error.message });
            }
            else {
                return res.status(400).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
exports.CreateUserController = CreateUserController;
