import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IEventsService from '../services/interfaces/IEventsService';
import { EventsService } from '../services/EventsService';

class EventsController {
  private readonly eventsService: IEventsService;

  constructor() {
    this.eventsService = new EventsService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.eventsService.create(req.body);

    return res.status(StatusCodes.CREATED).json(user);
  };
}

export default new EventsController();
