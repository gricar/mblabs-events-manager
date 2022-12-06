import { NextFunction, Request, Response } from 'express';
import { CompanySchema } from '../entities/schemas/company';
import { ZodSchemaError } from '../helpers/api-errors';

const validateCompany = (req: Request, _res: Response, next: NextFunction) => {
  const result = CompanySchema.safeParse(req.body);

  if (!result.success) {
    throw new ZodSchemaError(result.error.issues);
  }

  return next();
};

export default validateCompany;
