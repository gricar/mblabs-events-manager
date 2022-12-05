import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUsersService from '../services/interfaces/IUsersService';
import { UsersService } from '../services/UsersService';
import { User } from '../entities/User';

class UsersController {
  private readonly usersService: IUsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  public buyTicket = async (req: Request, res: Response): Promise<Response> => {
    const userId = req.userId as User['id'];

    await this.usersService.buyTicket(userId, req.body);

    return res.status(StatusCodes.OK).send('Successful ticket purchase');
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.usersService.create(req.body);

    return res.status(StatusCodes.CREATED).json(user);
  };

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const users = await this.usersService.getAll();

    return res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.usersService.getById(req.params.id);

    return res.status(StatusCodes.OK).json(user);
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    await this.usersService.update(req.params.id, req.body);

    return res.status(StatusCodes.OK).send('User successfully updated');
  };

  public remove = async (req: Request, res: Response): Promise<Response> => {
    await this.usersService.remove(req.params.id);

    return res.status(StatusCodes.OK).send('User successfully removed');
  };
}

export default new UsersController();
