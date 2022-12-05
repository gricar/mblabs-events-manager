import IEventsRepository from '../repositories/interfaces/IEventsRepository';
import { EventsRepository } from '../repositories/EventsRepository';
import IEventsService from './interfaces/IEventsService';
import { IEvent } from '../entities/schemas/event';
import { Event } from '../entities/Event';
import { ConflictError } from '../helpers/api-errors';

export class EventsService implements IEventsService {
  private readonly eventsRepository: IEventsRepository;

  constructor() {
    this.eventsRepository = new EventsRepository();
  }

  public create = async (event: IEvent): Promise<Partial<Event> | Error> => {
    await this.getByName(event.name);

    return this.eventsRepository.create(event);
  };

  public getAll = async (): Promise<Partial<Event>[]> => {
    return this.eventsRepository.getAll();
  };

  public getByName = async (eventName: string): Promise<null | Error> => {
    const eventExist = await this.eventsRepository.getByName(eventName);

    if (eventExist) {
      throw new ConflictError('Event name already exists!');
    }

    return eventExist;
  };
}
