import { Router } from 'express';
import usersController from '../controllers/usersController';

const users = Router();

users.get('/', usersController.getAll);

export default users;
