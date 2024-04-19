import { io } from 'socket.io-client';

/*interfaz para los datos del sensor que recibirás.
interface SensorData {
    userId: string;
    IdEsp: number;
    distancia: number;
    velocidad: number;
    aceleracion: number;
    cantidadPedaleos: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
*/
export class WebSocketService {
  private socket: any;

  constructor() {
    this.connect();
  }

  private connect() {
    const websocketUrl = process.env.WEBSOCKET_URL!;
    this.socket = io(websocketUrl);
    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server as client');
    });

    /* Escuchar actualizaciones de datos de sensores usando la interfaz SensorData
    this.socket.on('updateSensorData', (data: SensorData) => {
      console.log('Datos de sensor actualizados recibidos:', data);
    }); */
  }

  public sendToken(token: string) {
    this.socket.emit('authenticate', { token });
  }
}
