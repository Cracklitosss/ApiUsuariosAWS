import UserModel from '../domain/User';

export class GetUserWithSensors {
    async execute(userId: string): Promise<any> { // Cambia el tipo de retorno según tus definiciones de tipos
        try {
            const user = await UserModel.findById(userId).populate('sensorData').exec();
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error('Error retrieving user with sensor data: ' + error.message);
            } else {
    
                throw new Error('Error retrieving user with sensor data: An unknown error occurred');
            }
        }
    }
}
