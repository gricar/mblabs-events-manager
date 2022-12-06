import { z } from 'zod';

const EventSchema = z.object({
  name: z.string(),
  eventDay: z.date().min(new Date()),
  peopleCapacity: z.number().positive(),
  ticketsAvailable: z.number().positive(),
  soldOut: z.boolean(),
});

const CreateEventSchema = EventSchema.extend({
  sponsor: z.string(),
});

type IEvent = z.infer<typeof EventSchema>;

type ICreateEvent = z.infer<typeof CreateEventSchema>;

export { EventSchema, CreateEventSchema, IEvent, ICreateEvent };
