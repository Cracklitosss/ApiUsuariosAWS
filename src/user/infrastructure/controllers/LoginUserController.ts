import { Request, Response } from 'express';
import { LoginUser } from '../../application/LoginUser';

export class LoginUserController {
  constructor(private loginUser: LoginUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const user = await this.loginUser.execute(email, password);
      return res.status(200).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(401).json({ error: error.message });
      } else {
        return res.status(401).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
