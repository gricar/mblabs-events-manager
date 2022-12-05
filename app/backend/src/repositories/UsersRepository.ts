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

  public getAll = async (): Promise<Partial<User>[]> => {
    return this.usersRepository.find({
      select: {
        id: true,
        username: true,
        email: true,
        cpf: true,
      },
    });
  };

  public getByName = async (username: string): Promise<Partial<User> | null> => {
    return this.usersRepository.findOne({
      where: { username },
    });
  };

  public getById = async (id: string): Promise<Partial<User> | null> => {
    return this.usersRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        cpf: true,
      },
    });
  };

  public update = async (id: string, user: IUser): Promise<boolean> => {
    const { username, cpf, email, password } = user;
    const { affected } = await this.usersRepository.update({ id }, { username, cpf, email, password });
    return affected == 1;
  };

  public remove = async (id: string): Promise<boolean> => {
    const { affected } = await this.usersRepository.delete({
      id,
    });
    return affected == 1;
  };
}
