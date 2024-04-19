"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateUser_1 = require("../application/CreateUser");
const DeleteUser_1 = require("../application/DeleteUser");
const GetAllUsers_1 = require("../application/GetAllUsers");
const GetUserById_1 = require("../application/GetUserById");
const LoginUser_1 = require("../application/LoginUser");
const GetAllUsersWithSensorsController_1 = require("./controllers/GetAllUsersWithSensorsController");
const GetAllUsersWithSensors_1 = require("../application/GetAllUsersWithSensors");
const GetUserWithSensorsController_1 = require("./controllers/GetUserWithSensorsController");
const GetUserWithSensors_1 = require("../application/GetUserWithSensors");
const CreateUserController_1 = require("./controllers/CreateUserController");
const DeleteUserController_1 = require("./controllers/DeleteUserController");
const GetAllUsersController_1 = require("./controllers/GetAllUsersController");
const GetUserByIdController_1 = require("./controllers/GetUserByIdController");
const LoginUserController_1 = require("./controllers/LoginUserController");
const EncryptionService_1 = require("./services/EncryptionService");
const AuthService_1 = require("./services/AuthService");
const WebSocketService_1 = require("./services/WebSocketService");
const router = express_1.default.Router();
// Services
const encryptionService = new EncryptionService_1.EncryptionService();
const authService = new AuthService_1.AuthService();
const webSocketService = new WebSocketService_1.WebSocketService();
// Application services
const createUser = new CreateUser_1.CreateUser(encryptionService);
const deleteUser = new DeleteUser_1.DeleteUser();
const getAllUsers = new GetAllUsers_1.GetAllUsers();
const getUserById = new GetUserById_1.GetUserById();
const loginUser = new LoginUser_1.LoginUser(encryptionService, authService, webSocketService);
const getAllUsersWithSensorsService = new GetAllUsersWithSensors_1.GetAllUsersWithSensors();
const getUserWithSensorsService = new GetUserWithSensors_1.GetUserWithSensors();
// Controllers
const createUserController = new CreateUserController_1.CreateUserController(createUser);
const deleteUserController = new DeleteUserController_1.DeleteUserController(deleteUser);
const getAllUsersController = new GetAllUsersController_1.GetAllUsersController(getAllUsers);
const getUserByIdController = new GetUserByIdController_1.GetUserByIdController(getUserById);
const loginUserController = new LoginUserController_1.LoginUserController(loginUser);
const getAllUsersWithSensorsController = new GetAllUsersWithSensorsController_1.GetAllUsersWithSensorsController(getAllUsersWithSensorsService);
const getUserWithSensorsController = new GetUserWithSensorsController_1.GetUserWithSensorsController(getUserWithSensorsService);
// User routes
router.post('/users', (req, res) => createUserController.handle(req, res));
router.delete('/users/:id', (req, res) => deleteUserController.handle(req, res));
router.get('/users', (req, res) => getAllUsersController.handle(req, res));
router.get('/users/:id', (req, res) => getUserByIdController.handle(req, res));
router.post('/login', (req, res) => loginUserController.handle(req, res));
router.get('/usersws', (req, res) => getAllUsersWithSensorsController.handle(req, res));
router.get('/usersws/:id', (req, res) => getUserWithSensorsController.handle(req, res));
exports.default = router;
