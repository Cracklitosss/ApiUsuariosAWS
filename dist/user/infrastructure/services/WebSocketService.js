"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketService = void 0;
const socket_io_client_1 = require("socket.io-client");
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
class WebSocketService {
    socket;
    constructor() {
        this.connect();
    }
    connect() {
        const websocketUrl = process.env.WEBSOCKET_URL;
        this.socket = (0, socket_io_client_1.io)(websocketUrl);
        this.socket.on('connect', () => {
            console.log('Connected to WebSocket server as client');
        });
        /* Escuchar actualizaciones de datos de sensores usando la interfaz SensorData
        this.socket.on('updateSensorData', (data: SensorData) => {
          console.log('Datos de sensor actualizados recibidos:', data);
        }); */
    }
    sendToken(token) {
        this.socket.emit('authenticate', { token });
    }
}
exports.WebSocketService = WebSocketService;
