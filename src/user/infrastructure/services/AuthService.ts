import jwt from 'jsonwebtoken';
import { IUser } from '../../domain/User';

export class AuthService {
  private readonly secretKey = process.env.JWT_SECRET || '12345';
  private readonly expiration = process.env.JWT_EXPIRATION || '4h';

  generateToken(user: IUser): string {
    const payload = {
      id: user._id,
      email: user.email,
      IdEsp: user.IdEsp 
    };
    const token = jwt.sign(payload, this.secretKey, { expiresIn: this.expiration });
    
    console.log("JWT Payload:", payload);  // Mostrar el payload en la consola

    return token;
  }

  verifyToken(token: string): string | object {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      console.log("Decoded JWT:", decoded);
      return decoded;
    } catch (error) {
      console.error("Error verifying token:", error);
      throw error; 
    }
  }  
}


