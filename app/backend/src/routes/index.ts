import { Request, Router } from 'express';
import { NotFoundError } from '../helpers/api-errors';
import usersRoute from './users';

const routes = Router();

routes.use('/users', usersRoute);

routes.all('*', (req: Request): Error => {
  throw new NotFoundError(`Route '${req.path}' doesn't exist!`);
});

export default routes;
