import { z } from 'zod';

const EventSchema = z.object({
  name: z.string(),
  eventDay: z.date().min(new Date()),
  peopleCapacity: z.number().positive(),
  ticketsAvailable: z.number().positive(),
  soldOut: z.boolean(),
});

type IEvent = z.infer<typeof EventSchema>;

export { EventSchema, IEvent };
