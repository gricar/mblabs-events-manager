import { NextFunction, Request, Response } from 'express';
import { EventNameSchema } from '../entities/schemas/event';
import { ZodSchemaError } from '../helpers/api-errors';

const validateBuyEvent = (req: Request, _res: Response, next: NextFunction) => {
  const result = EventNameSchema.safeParse(req.body);

  if (!result.success) {
    throw new ZodSchemaError(result.error.issues);
  }

  return next();
};

export default validateBuyEvent;
