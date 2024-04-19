"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserWithSensorsController = void 0;
class GetUserWithSensorsController {
    getUserWithSensorsService;
    constructor(getUserWithSensorsService) {
        this.getUserWithSensorsService = getUserWithSensorsService;
    }
    async handle(req, res) {
        try {
            const userId = req.params.id;
            const user = await this.getUserWithSensorsService.execute(userId);
            return res.status(200).json(user);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Error fetching user with sensor data', error: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
exports.GetUserWithSensorsController = GetUserWithSensorsController;
