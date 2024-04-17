import UserModel from '../domain/User';
import SensorDataModel from '../domain/SensorData';

export class GetAllUsersWithSensors {
    async execute(): Promise<any[]> { // Cambia el tipo de retorno según tus definiciones de tipos
        try {
            return await UserModel.find().populate('sensorData').exec();
        } catch (error: unknown) { // Asegúrate de especificar 'unknown' aquí
            if (error instanceof Error) {
                throw new Error('Error retrieving all users with sensor data: ' + error.message);
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }
}
