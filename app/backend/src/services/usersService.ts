import { IUser } from '../entities/schemas/user';
import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import { UsersRepository } from '../repositories/usersRepository';

export class UsersService {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public create = async (user: IUser): Promise<IUser> => {
    return this.usersRepository.create(user);
  };

  public getAll = async (): Promise<IUser[]> => {
    return this.usersRepository.getAll();
  };
}
