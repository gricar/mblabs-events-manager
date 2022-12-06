import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserSchema } from '../entities/schemas/user';

const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  const result = UserSchema.safeParse(req.body);

  if (!result.success) {
    const arrMsg: { field: string; error: string }[] = [];

    result.error.issues.map(({ path, message }) => {
      arrMsg.push({ field: path.toString(), error: message });
    });

    const err = {
      statusCode: StatusCodes.BAD_REQUEST,
      message: arrMsg,
    };
    return next(err);
  }

  return next();
};

export default validateUser;
