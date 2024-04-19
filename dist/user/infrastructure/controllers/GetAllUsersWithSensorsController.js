"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersWithSensorsController = void 0;
class GetAllUsersWithSensorsController {
    getAllUsersWithSensorsService;
    constructor(getAllUsersWithSensorsService) {
        this.getAllUsersWithSensorsService = getAllUsersWithSensorsService;
    }
    async handle(req, res) {
        try {
            const users = await this.getAllUsersWithSensorsService.execute();
            return res.status(200).json(users);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Error fetching users with sensor data', error: error.message });
            }
            else {
                return res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
exports.GetAllUsersWithSensorsController = GetAllUsersWithSensorsController;
