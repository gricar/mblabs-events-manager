import { Router } from 'express';
import usersController from '../controllers/UsersController';
import auth from '../middlewares/auth';
import validateUser from '../middlewares/validateUser';

const users = Router();

users.post('/', validateUser, usersController.create);
users.use(auth);
users.get('/', usersController.getAll);
users.get('/:id', usersController.getById);
users.put('/:id', validateUser, usersController.update);
users.delete('/:id', usersController.remove);

export default users;
