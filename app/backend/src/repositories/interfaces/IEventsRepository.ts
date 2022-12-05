import { IEvent } from '../../entities/schemas/event';
import { Event } from '../../entities/Event';

export default interface IEventsRepository {
  create: (event: IEvent) => Promise<Partial<Event>>;
  getAll: () => Promise<Partial<Event>[]>;
  getByName: (name: string) => Promise<Partial<Event> | null>;
  getById: (id: string) => Promise<Partial<Event> | null>;
  update: (id: string, event: IEvent) => Promise<boolean>;
}
