import { StatusCodes } from 'http-status-codes';
import { ZodIssue } from 'zod';

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class ConflictError extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.CONFLICT);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class ZodSchemaError {
  public readonly statusCode: number;
  public issues: ZodIssue[];
  public message: {
    field: string;
    error: string;
  }[];

  constructor(issues: ZodIssue[]) {
    this.issues = issues;
    this.message = this.mapIssues();
    this.statusCode = StatusCodes.BAD_REQUEST;
  }

  mapIssues() {
    const arrMsg: { field: string; error: string }[] = [];

    this.issues.map(({ path, message }) => {
      arrMsg.push({ field: path.toString(), error: message });
    });

    return arrMsg;
  }
}
