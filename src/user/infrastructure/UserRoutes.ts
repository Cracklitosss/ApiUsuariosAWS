import express from 'express';
import { CreateUser } from '../application/CreateUser';
import { DeleteUser } from '../application/DeleteUser';
import { GetAllUsers } from '../application/GetAllUsers';
import { GetUserById } from '../application/GetUserById';
import { LoginUser } from '../application/LoginUser';
import { GetAllUsersWithSensorsController } from './controllers/GetAllUsersWithSensorsController';
import { GetAllUsersWithSensors } from '../application/GetAllUsersWithSensors';
import { GetUserWithSensorsController } from './controllers/GetUserWithSensorsController';
import { GetUserWithSensors } from '../application/GetUserWithSensors';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { GetUserByIdController } from './controllers/GetUserByIdController';
import { LoginUserController } from './controllers/LoginUserController';
import { EncryptionService } from './services/EncryptionService';
import { AuthService } from './services/AuthService';
import { WebSocketService } from './services/WebSocketService';
const router = express.Router();

// Services
const encryptionService = new EncryptionService();
const authService = new AuthService();
const webSocketService = new WebSocketService();

// Application services
const createUser = new CreateUser(encryptionService);
const deleteUser = new DeleteUser();
const getAllUsers = new GetAllUsers();
const getUserById = new GetUserById();
const loginUser = new LoginUser(encryptionService, authService, webSocketService);
const getAllUsersWithSensorsService = new GetAllUsersWithSensors();
const getUserWithSensorsService = new GetUserWithSensors();

// Controllers
const createUserController = new CreateUserController(createUser);
const deleteUserController = new DeleteUserController(deleteUser);
const getAllUsersController = new GetAllUsersController(getAllUsers);
const getUserByIdController = new GetUserByIdController(getUserById);
const loginUserController = new LoginUserController(loginUser);
const getAllUsersWithSensorsController = new GetAllUsersWithSensorsController(getAllUsersWithSensorsService);
const getUserWithSensorsController = new GetUserWithSensorsController(getUserWithSensorsService);

// User routes
router.post('/users', (req, res) => createUserController.handle(req, res));
router.delete('/users/:id', (req, res) => deleteUserController.handle(req, res));
router.get('/users', (req, res) => getAllUsersController.handle(req, res));
router.get('/users/:id', (req, res) => getUserByIdController.handle(req, res));
router.post('/login', (req, res) => loginUserController.handle(req, res));
router.get('/usersws', (req, res) => getAllUsersWithSensorsController.handle(req, res));
router.get('/usersws/:id', (req, res) => getUserWithSensorsController.handle(req, res));


export default router;
