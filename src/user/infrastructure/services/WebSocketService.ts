import { io } from 'socket.io-client';

export class WebSocketService {
  private socket: any;

  constructor() {
    // Eliminamos la llamada automática a connect desde el constructor
  }

  public sendToken(token: string) {
    this.connect(token);  // Conectar cuando se envía el token
  }

  private connect(token: string) {
    const websocketUrl = process.env.WEBSOCKET_URL!;
    this.socket = io(websocketUrl, {
      autoConnect: false,
    });

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server as client');
      this.socket.emit('authenticate', { token });  // Autenticar inmediatamente después de conectar
    });

    this.socket.open();  // Abrir la conexión manualmente
  }
}
