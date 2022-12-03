import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import IUsersRepository from './interfaces/IUsersRepository';
import { IUser } from '../entities/schemas/user';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(User);
  }

  public create = async ({ cpf, email, password, username }: IUser): Promise<Partial<User>> => {
    const newUser = this.usersRepository.create({
      cpf,
      email,
      password,
      username,
    });

    await this.usersRepository.save(newUser);

    const { id } = newUser;

    return { id, username, email, cpf };
  };

  public getAll = async (): Promise<IUser[]> => {
    return this.usersRepository.find({
      select: {
        id: true,
        username: true,
        cpf: true,
        email: true,
      },
    });
  };

  public getByName = async (username: string): Promise<IUser | null> => {
    return this.usersRepository.findOne({
      where: { username },
    });
  };
}
