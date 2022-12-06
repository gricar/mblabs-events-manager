import { IEvent } from '../../entities/schemas/event';
import { Event } from '../../entities/Event';
import { User } from '../../entities/User';

export default interface IEventsRepository {
  buyTicket: (user: User, event: Event) => Promise<void>;
  create: (event: IEvent) => Promise<Partial<Event>>;
  getAll: () => Promise<Partial<Event>[]>;
  getByName: (name: string) => Promise<Partial<Event> | null>;
  getById: (id: string) => Promise<Partial<Event> | null>;
  update: (id: string, event: IEvent) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
}
