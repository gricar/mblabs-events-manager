import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsersService from '../services/interfaces/IUsersService';
import { UsersService } from '../services/usersService';

class UsersController {
  private readonly usersService: IUsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const users = await this.usersService.getAll();

    return res.status(StatusCodes.OK).json(users);
  };
}

export default new UsersController();
