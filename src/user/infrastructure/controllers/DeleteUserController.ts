import { Request, Response } from 'express';
import { DeleteUser } from '../../application/DeleteUser';

export class DeleteUserController {
  constructor(private deleteUser: DeleteUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.deleteUser.execute(req.params.id);
      if (!result) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(204).json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
