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
    const event = await this.eventsService.create(req.body);

    return res.status(StatusCodes.CREATED).json(event);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const events = await this.eventsService.getAll();

    return res.status(StatusCodes.OK).json(events);
  };
}

export default new EventsController();
