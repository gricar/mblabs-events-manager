import IEventsService from './interfaces/IEventsService';
import IEventsRepository from '../repositories/interfaces/IEventsRepository';
import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import { EventsRepository } from '../repositories/EventsRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import { ICreateEvent, IEvent, IEventName } from '../entities/schemas/event';
import { Event } from '../entities/Event';
import { User } from '../entities/User';
import { BadRequestError, ConflictError, NotFoundError } from '../helpers/api-errors';
import ICompaniesRepository from '../repositories/interfaces/ICompaniesRepository';
import { CompaniesRepository } from '../repositories/CompaniesRepository';
import IUniversitiesRepository from '../repositories/interfaces/IUniversitiesRepository';
import { UniversitiesRepository } from '../repositories/UniversitiesRepository';

export class EventsService implements IEventsService {
  private readonly eventsRepository: IEventsRepository;
  private readonly usersRepository: IUsersRepository;
  private readonly companiesRepository: ICompaniesRepository;
  private readonly universitiesRepository: IUniversitiesRepository;

  constructor() {
    this.eventsRepository = new EventsRepository();
    this.usersRepository = new UsersRepository();
    this.companiesRepository = new CompaniesRepository();
    this.universitiesRepository = new UniversitiesRepository();
  }

  public buyTicket = async (userId: string, { name }: IEventName): Promise<void> => {
    const user = await this.usersRepository.getById(userId);

    const event = await this.eventsRepository.getByName(name);

    if (!event) {
      throw new NotFoundError('Event not found!');
    }

    if (event.soldOut) {
      throw new BadRequestError('This event is sold out.');
    }

    user?.events?.map((e) => {
      if (e.name.toLocaleLowerCase() == name.toLocaleLowerCase()) {
        throw new BadRequestError('You already have a ticket for this event.');
      }
    });

    if (event.ticketsAvailable! == 1) {
      event.soldOut = true;
    }

    event.ticketsAvailable! -= 1;

    await this.eventsRepository.buyTicket(user as User, event as Event);
  };

  public create = async (event: ICreateEvent): Promise<Partial<Event> | Error> => {
    await this.getByName(event.name);

    const companySponsor = await this.companiesRepository.getByName(event.sponsor);

    const universitySponsor = await this.universitiesRepository.getByName(event.sponsor);

    if (!companySponsor && !universitySponsor) {
      throw new NotFoundError('Sponsor not found!');
    }

    const newEvent = event as Partial<Event>;

    if (companySponsor) {
      newEvent.company = companySponsor;
    }

    if (universitySponsor) {
      newEvent.university = universitySponsor;
    }

    return this.eventsRepository.create(newEvent as Event);
  };

  public getAll = async (isSoldOut: boolean): Promise<Partial<Event>[]> => {
    return this.eventsRepository.getAll(isSoldOut);
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

  public remove = async (id: string): Promise<boolean | Error> => {
    await this.getById(id);

    const removedSucess = await this.eventsRepository.remove(id);

    if (!removedSucess) {
      throw new Error('Failed to delete event');
    }

    return removedSucess;
  };
}
