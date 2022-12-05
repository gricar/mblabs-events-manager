import { IEvent } from '../../entities/schemas/event';
import { Event } from '../../entities/Event';

export default interface IEventsService {
  create: (event: IEvent) => Promise<Partial<Event> | Error>;
  getAll: () => Promise<Partial<Event>[]>;
  getByName: (eventName: string) => Promise<null | Error>;
}
