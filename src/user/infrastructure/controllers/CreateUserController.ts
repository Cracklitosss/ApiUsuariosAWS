import { Request, Response } from 'express';
import { CreateUser } from '../../application/CreateUser';

export class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.createUser.execute(req.body);
      return res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(400).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
