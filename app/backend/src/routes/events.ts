import { Router } from 'express';
import EventsController from '../controllers/EventsController';
import auth from '../middlewares/auth';
import validateBuyEvent from '../middlewares/validateBuyEvent';
import validateEvent from '../middlewares/validateEvent';

const events = Router();

events.post('/', validateEvent, EventsController.create);
events.use(auth);
events.get('/', EventsController.getAll);
events.get('/:id', EventsController.getById);
events.put('/:id', EventsController.update);
events.delete('/:id', EventsController.remove);
events.post('/buy-ticket', validateBuyEvent, EventsController.buyTicket);

export default events;
