import { Request, Response } from 'express';
import { GetAllUsersWithSensors } from '../../application/GetAllUsersWithSensors';

export class GetAllUsersWithSensorsController {
    constructor(private getAllUsersWithSensorsService: GetAllUsersWithSensors) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.getAllUsersWithSensorsService.execute();
            return res.status(200).json(users);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Error fetching users with sensor data', error: error.message });
            } else {
                return res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
