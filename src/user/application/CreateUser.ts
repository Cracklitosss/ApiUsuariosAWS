import UserModel, { IUser } from '../domain/User';
import { EncryptionService } from '../infrastructure/services/EncryptionService';

export class CreateUser {
  constructor(private encryptionService: EncryptionService) {}

  async execute(userData: IUser) {
    try {
      const hashedPassword = await this.encryptionService.hashPassword(userData.password);

      const newUser = new UserModel({
        email: userData.email,
        name: userData.name,
        password: hashedPassword,
        IdEsp: userData.IdEsp,
        ocupacion: userData.ocupacion,
        estado: userData.estado, 
        sensorData: userData.sensorData
      });

      await newUser.save();
      
      return newUser;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error creating user: ' + error.message);
      } else {
        throw new Error('Error creating user: An unknown error occurred');
      }
    }
  }
}
