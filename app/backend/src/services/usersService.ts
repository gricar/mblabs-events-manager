import { IUser } from '../entities/schemas/user';
import { User } from '../entities/User';
import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import { UsersRepository } from '../repositories/usersRepository';
import IUsersService from './interfaces/IUsersService';
import { ConflictError, NotFoundError } from '../helpers/api-errors';

export class UsersService implements IUsersService {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public create = async (user: IUser): Promise<Partial<User> | Error> => {
    const userExist = await this.usersRepository.getByName(user.username);

    if (userExist) {
      throw new ConflictError('Username already exists!');
    }

    return this.usersRepository.create(user);
  };

  public getAll = async (): Promise<Partial<User>[]> => {
    return this.usersRepository.getAll();
  };

  public getById = async (id: string): Promise<Partial<User> | Error> => {
    const userFound = await this.usersRepository.getById(id);

    if (!userFound) {
      throw new NotFoundError('User not found!');
    }

    return userFound;
  };

  public update = async (id: string, user: IUser): Promise<Partial<User> | Error> => {
    const userFound = await this.usersRepository.getById(id);

    if (!userFound) {
      throw new NotFoundError('User not found!');
    }

    const updatedSucess = await this.usersRepository.update(id, user);

    if (!updatedSucess) {
      throw new Error('Failed to update user');
    }

    return this.getById(id);
  };
}
