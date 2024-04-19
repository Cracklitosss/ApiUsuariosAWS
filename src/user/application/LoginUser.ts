import UserModel from '../domain/User';
import { EncryptionService } from '../infrastructure/services/EncryptionService';
import { AuthService } from '../infrastructure/services/AuthService';
import { WebSocketService } from '../infrastructure/services/WebSocketService';

export class LoginUser {
  constructor(
    private encryptionService: EncryptionService,
    private authService: AuthService,
    private webSocketService: WebSocketService
  ) {}

  async execute(email: string, password: string) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await this.encryptionService.comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      const token = this.authService.generateToken(user);
      this.webSocketService.sendToken(token);
      return { user, token, };  //información del usuario se debe enviar al frontend
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Login error: ' + error.message);
      } else {
        throw new Error('Login error: An unknown error occurred');
      }
    }
  }
}