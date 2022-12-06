import { NextFunction, Request, Response } from 'express';
import { CreateEventSchema } from '../entities/schemas/event';
import { ZodSchemaError } from '../helpers/api-errors';

const validateEvent = (req: Request, _res: Response, next: NextFunction) => {
  const result = CreateEventSchema.safeParse(req.body);

  if (!result.success) {
    throw new ZodSchemaError(result.error.issues);
  }

  return next();
};

export default validateEvent;
