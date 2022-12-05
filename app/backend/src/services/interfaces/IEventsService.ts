import { IEvent } from '../../entities/schemas/event';
import { Event } from '../../entities/Event';

export default interface IEventsService {
  create: (event: IEvent) => Promise<Partial<Event> | Error>;
  getAll: () => Promise<Partial<Event>[]>;
  getById: (id: string) => Promise<Partial<Event> | Error>;
  getByName: (eventName: string) => Promise<null | Error>;
  update: (id: string, event: IEvent) => Promise<boolean | Error>;
}
