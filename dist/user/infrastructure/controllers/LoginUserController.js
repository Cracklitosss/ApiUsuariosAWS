"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
class LoginUserController {
    loginUser;
    constructor(loginUser) {
        this.loginUser = loginUser;
    }
    async handle(req, res) {
        try {
            const { email, password } = req.body;
            const user = await this.loginUser.execute(email, password);
            return res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(401).json({ error: error.message });
            }
            else {
                return res.status(401).json({ error: 'An unknown error occurred' });
            }
        }
    }
}
exports.LoginUserController = LoginUserController;
