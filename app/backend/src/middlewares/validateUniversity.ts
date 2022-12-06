import { NextFunction, Request, Response } from 'express';
import { UniversitySchema } from '../entities/schemas/university';
import { ZodSchemaError } from '../helpers/api-errors';

const validateUniversity = (req: Request, _res: Response, next: NextFunction) => {
  const result = UniversitySchema.safeParse(req.body);

  if (!result.success) {
    throw new ZodSchemaError(result.error.issues);
  }

  return next();
};

export default validateUniversity;
