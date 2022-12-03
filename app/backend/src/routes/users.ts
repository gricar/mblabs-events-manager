import { Router } from 'express';
import usersController from '../controllers/usersController';

const users = Router();

users.get('/', usersController.getAll);
users.post('/', usersController.create);

export default users;
