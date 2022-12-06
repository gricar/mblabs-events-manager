import { Router } from 'express';
import usersController from '../controllers/UsersController';
import auth from '../middlewares/auth';

const users = Router();

users.post('/', usersController.create);
users.use(auth);
users.get('/', usersController.getAll);
users.get('/:id', usersController.getById);
users.put('/:id', usersController.update);
users.delete('/:id', usersController.remove);

export default users;
