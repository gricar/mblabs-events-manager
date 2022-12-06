import { Router } from 'express';
import EventsController from '../controllers/EventsController';
import auth from '../middlewares/auth';

const events = Router();

events.post('/', EventsController.create);
events.use(auth);
events.get('/', EventsController.getAll);
events.get('/:id', EventsController.getById);
events.put('/:id', EventsController.update);
events.delete('/:id', EventsController.remove);
events.post('/buy-ticket', EventsController.buyTicket);

export default events;
