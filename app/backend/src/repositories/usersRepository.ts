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

  public create = async ({ cpf, email, password, username }: IUser): Promise<IUser> => {
    const newUser = this.usersRepository.create({
      cpf,
      email,
      password,
      username,
    });

    return await this.usersRepository.save(newUser);
  };

  public getAll = async (): Promise<IUser[]> => {
    return this.usersRepository.find();
  };
}
