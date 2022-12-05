import { Request, Router } from 'express';
import { NotFoundError } from '../helpers/api-errors';
import eventsRoute from './events';
import usersRoute from './users';

const routes = Router();

routes.use('/users', usersRoute);
routes.use('/events', eventsRoute);

routes.all('*', (req: Request): Error => {
  throw new NotFoundError(`Route '${req.path}' doesn't exist!`);
});

export default routes;
