import mongoose, { Document, Schema } from 'mongoose';

// Definir la interfaz ISensorData
export interface ISensorData extends Document {
  userId: mongoose.Types.ObjectId;
  IdEsp: number;
  distancia: number;
  velocidad: number;
  aceleracion: number;
  cantidadPedaleos: number;
}

// Definir el esquema de Mongoose para SensorData
const sensorDataSchema = new mongoose.Schema<ISensorData>({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  IdEsp:{type: Number, default: 0 },
  distancia: { type: Number, default: 0 },
  velocidad: { type: Number, default: 0 },
  aceleracion: { type: Number, default: 0 },
  cantidadPedaleos: { type: Number, default: 0 }
});

// Exportar el modelo de Mongoose para SensorData
const SensorDataModel = mongoose.model<ISensorData>('SensorData', sensorDataSchema);
export default SensorDataModel;
