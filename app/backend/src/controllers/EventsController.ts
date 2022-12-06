import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IEventsService from '../services/interfaces/IEventsService';
import { EventsService } from '../services/EventsService';
import { User } from '../entities/User';

class EventsController {
  private readonly eventsService: IEventsService;

  constructor() {
    this.eventsService = new EventsService();
  }

  public buyTicket = async (req: Request, res: Response): Promise<Response> => {
    const userId = req.userId as User['id'];

    await this.eventsService.buyTicket(userId, req.body.eventName);

    return res.status(StatusCodes.OK).send('Successful ticket purchase');
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const event = await this.eventsService.create(req.body);

    return res.status(StatusCodes.CREATED).json(event);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const isSoldOut = req.query.isSoldOut === 'true';

    const events = await this.eventsService.getAll(isSoldOut);

    return res.status(StatusCodes.OK).json(events);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const event = await this.eventsService.getById(req.params.id);

    return res.status(StatusCodes.OK).json(event);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    await this.eventsService.update(req.params.id, req.body);

    return res.status(StatusCodes.OK).send('Event successfully updated');
  };

  public remove = async (req: Request, res: Response): Promise<Response> => {
    await this.eventsService.remove(req.params.id);

    return res.status(StatusCodes.OK).send('Event successfully removed');
  };
}

export default new EventsController();
