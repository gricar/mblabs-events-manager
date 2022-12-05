import IEventsRepository from '../repositories/interfaces/IEventsRepository';
import { EventsRepository } from '../repositories/EventsRepository';
import IEventsService from './interfaces/IEventsService';
import { IEvent } from '../entities/schemas/event';
import { Event } from '../entities/Event';
import { ConflictError, NotFoundError } from '../helpers/api-errors';

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

  public getById = async (id: string): Promise<Partial<Event> | Error> => {
    const eventFound = await this.eventsRepository.getById(id);

    if (!eventFound) {
      throw new NotFoundError('Event not found!');
    }

    return eventFound;
  };

  public getByName = async (eventName: string): Promise<null | Error> => {
    const eventExist = await this.eventsRepository.getByName(eventName);

    if (eventExist) {
      throw new ConflictError('Event name already exists!');
    }

    return eventExist;
  };

  public update = async (id: string, event: IEvent): Promise<boolean | Error> => {
    await this.getById(id);

    await this.getByName(event.name);

    const updatedSucess = await this.eventsRepository.update(id, event);

    if (!updatedSucess) {
      throw new Error('Failed to update event');
    }

    return updatedSucess;
  };
}
