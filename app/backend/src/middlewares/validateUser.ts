import { NextFunction, Request, Response } from 'express';
import { UserSchema } from '../entities/schemas/user';
import { ZodSchemaError } from '../helpers/api-errors';

const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  const result = UserSchema.safeParse(req.body);

  if (!result.success) {
    throw new ZodSchemaError(result.error.issues);
  }

  return next();
};

export default validateUser;
