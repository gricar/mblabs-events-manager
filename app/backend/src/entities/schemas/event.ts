import { z } from 'zod';

const dateSchema = z.preprocess((arg) => {
  if (typeof arg == 'string' || arg instanceof Date) return new Date(arg);
}, z.date().min(new Date()));

const EventNameSchema = z.object({
  name: z.string().min(4),
});

const EventSchema = EventNameSchema.extend({
  eventDay: dateSchema,
  peopleCapacity: z.number().positive(),
  ticketsAvailable: z.number().positive(),
  soldOut: z.boolean().default(false),
});

const CreateEventSchema = EventSchema.extend({
  sponsor: z.string(),
}).refine((schema) => schema.ticketsAvailable <= schema.peopleCapacity, {
  message: 'The amount of available tickets must be less than or equal to the capacity of people',
  path: ['ticketsAvailable'],
});

type IEventName = z.infer<typeof EventNameSchema>;

type IEvent = z.infer<typeof EventSchema>;

type ICreateEvent = z.infer<typeof CreateEventSchema>;

export { EventNameSchema, EventSchema, CreateEventSchema, IEventName, IEvent, ICreateEvent };
