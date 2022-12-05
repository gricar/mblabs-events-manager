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

  public getAll = async (): Promise<Partial<Event>[]> => {
    return this.eventsRepository.find({
      select: {
        id: true,
        name: true,
        eventDay: true,
        peopleCapacity: true,
        ticketsAvailable: true,
        soldOut: true,
      },
    });
  };

  public getById = async (id: string): Promise<Partial<Event> | null> => {
    return this.eventsRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        eventDay: true,
        peopleCapacity: true,
        ticketsAvailable: true,
        soldOut: true,
      },
    });
  };

  public getByName = async (name: string): Promise<Partial<Event> | null> => {
    return this.eventsRepository.findOne({
      where: { name },
    });
  };

  public update = async (id: string, event: IEvent): Promise<boolean> => {
    const { name, eventDay, peopleCapacity, ticketsAvailable, soldOut } = event;
    const { affected } = await this.eventsRepository.update(
      { id },
      { name, eventDay, peopleCapacity, ticketsAvailable, soldOut },
    );
    return affected == 1;
  };
}
