import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsersService from '../services/interfaces/IUsersService';
import { UsersService } from '../services/UsersService';

class LoginController {
  private readonly usersService: IUsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public login = async (req: Request, res: Response): Promise<Response> => {
    const token = await this.usersService.login(req.body);

    return res.status(StatusCodes.OK).json({ token });
  };
}

export default new LoginController();
