import { Request, Response } from 'express';
import { GetUserWithSensors } from '../../application/GetUserWithSensors';

export class GetUserWithSensorsController {
    constructor(private getUserWithSensorsService: GetUserWithSensors) {}

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const user = await this.getUserWithSensorsService.execute(userId);
            return res.status(200).json(user);
        } catch (error: unknown) {
            if (error instanceof Error) {
                return res.status(500).json({ message: 'Error fetching user with sensor data', error: error.message });
            } else {
                return res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
