import { Request, Response } from 'express';
import { GetAllUsers } from '../../application/GetAllUsers';

export class GetAllUsersController {
  constructor(private getAllUsers: GetAllUsers) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.getAllUsers.execute();
      return res.status(200).json(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
