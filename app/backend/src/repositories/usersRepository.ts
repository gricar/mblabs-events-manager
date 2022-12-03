import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import IUsersRepository from './interfaces/IUsersRepository';
import { User } from '../entities/User';
import { IUser } from '../entities/schemas/user';

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(User);
  }

  public getAll = async (): Promise<IUser[]> => {
    return this.usersRepository.find();
  };
}
