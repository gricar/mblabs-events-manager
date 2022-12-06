import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import IEventsRepository from './interfaces/IEventsRepository';
import { IEvent } from '../entities/schemas/event';
import { Event } from '../entities/Event';
import { User } from '../entities/User';

export class EventsRepository implements IEventsRepository {
  private eventsRepository: Repository<Event>;

  constructor() {
    this.eventsRepository = AppDataSource.getRepository(Event);
  }

  public buyTicket = async (user: User, event: Event): Promise<void> => {
    event.users = [...[user]];

    const userEvent = await this.eventsRepository.create(event);

    await this.eventsRepository.save(userEvent);
  };

  public create = async (evento: Partial<Event>): Promise<Partial<Event>> => {
    const { name, eventDay, peopleCapacity, ticketsAvailable, company, university } = evento;
    const newEvent = this.eventsRepository.create({
      name,
      eventDay,
      peopleCapacity,
      ticketsAvailable,
      company,
      university,
    });

    await this.eventsRepository.save(newEvent);

    const { id } = newEvent;

    return { id, name, eventDay, peopleCapacity, ticketsAvailable };
  };

  public getAll = async (isSoldOut = false): Promise<Partial<Event>[]> => {
    return this.eventsRepository.find({
      where: {
        soldOut: isSoldOut,
      },
      select: {
        id: true,
        name: true,
        eventDay: true,
        peopleCapacity: true,
        ticketsAvailable: true,
        soldOut: true,
      },
      order: {
        eventDay: 'ASC',
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
      relations: {
        users: true,
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

  public remove = async (id: string): Promise<boolean> => {
    const { affected } = await this.eventsRepository.delete({
      id,
    });
    return affected == 1;
  };
}
