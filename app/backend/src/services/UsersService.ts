import { ILogin } from '../entities/schemas/login';
import { IUser } from '../entities/schemas/user';
import { User } from '../entities/User';
import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import IUsersService from './interfaces/IUsersService';
import { ConflictError, NotFoundError, UnauthorizedError } from '../helpers/api-errors';
import TokenAuthentication from '../helpers/jwt';
import HashPassword from '../helpers/hashPassword';

export class UsersService implements IUsersService {
  private readonly usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public create = async (user: IUser): Promise<Partial<User> | Error> => {
    await this.getByName(user.username);

    const hashPwd = await HashPassword.generate(user.password);

    user.password = hashPwd;

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

  public getByName = async (username: string): Promise<null | Error> => {
    const userExist = await this.usersRepository.getByName(username);

    if (userExist) {
      throw new ConflictError('Username already exists!');
    }

    return userExist;
  };

  public login = async ({ username, password }: ILogin): Promise<string> => {
    const foundUser = await this.usersRepository.getByName(username);

    if (!foundUser) {
      throw new NotFoundError('User does not exists!');
    }

    const isLoginValid = await HashPassword.comparePassword(password, foundUser.password!);

    if (!isLoginValid) {
      throw new UnauthorizedError('Password not valid, try again.');
    }

    return TokenAuthentication.generateToken(foundUser.id!);
  };

  public update = async (id: string, user: IUser): Promise<boolean | Error> => {
    await this.getById(id);

    await this.getByName(user.username);

    const updatedSucess = await this.usersRepository.update(id, user);

    if (!updatedSucess) {
      throw new Error('Failed to update user');
    }

    return updatedSucess;
  };

  public remove = async (id: string): Promise<boolean | Error> => {
    await this.getById(id);

    const removedSucess = await this.usersRepository.remove(id);

    if (!removedSucess) {
      throw new Error('Failed to delete user');
    }

    return removedSucess;
  };
}
