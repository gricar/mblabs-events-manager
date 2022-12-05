import { Router } from 'express';
import EventsController from '../controllers/EventsController';

const events = Router();

events.get('/', EventsController.getAll);
events.post('/', EventsController.create);
events.get('/:id', EventsController.getById);
events.put('/:id', EventsController.update);
events.delete('/:id', EventsController.remove);

export default events;
