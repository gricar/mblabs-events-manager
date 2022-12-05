import { Router } from 'express';
import EventsController from '../controllers/EventsController';

const events = Router();

events.get('/', EventsController.getAll);
events.post('/', EventsController.create);

export default events;
