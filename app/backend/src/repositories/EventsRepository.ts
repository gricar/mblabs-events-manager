import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import IEventsRepository from './interfaces/IEventsRepository';
import { IEvent } from '../entities/schemas/event';
import { Event } from '../entities/Event';

export class EventsRepository implements IEventsRepository {
  private eventsRepository: Repository<Event>;

  constructor() {
    this.eventsRepository = AppDataSource.getRepository(Event);
  }

  public create = async ({
    name,
    eventDay,
    peopleCapacity,
    ticketsAvailable,
    soldOut,
  }: IEvent): Promise<Partial<Event>> => {
    const newEvent = this.eventsRepository.create({
      name,
      eventDay,
      peopleCapacity,
      ticketsAvailable,
      soldOut,
    });

    await this.eventsRepository.save(newEvent);

    const { id } = newEvent;

    return { id, name, eventDay, peopleCapacity, ticketsAvailable, soldOut };
  };

  public getByName = async (name: string): Promise<Partial<Event> | null> => {
    return this.eventsRepository.findOne({
      where: { name },
    });
  };
}
