import { Request, Router } from 'express';
import { NotFoundError } from '../helpers/api-errors';
import companiesRoute from './companies';
import eventsRoute from './events';
import usersRoute from './users';

const routes = Router();

routes.use('/companies', companiesRoute);
routes.use('/events', eventsRoute);
routes.use('/users', usersRoute);

routes.all('*', (req: Request): Error => {
  throw new NotFoundError(`Route '${req.path}' doesn't exist!`);
});

export default routes;
