import { Request, Response } from 'express';
import { GetUserById } from '../../application/GetUserById';

export class GetUserByIdController {
  constructor(private getUserById: GetUserById) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.getUserById.execute(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
