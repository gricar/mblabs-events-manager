import { ILogin } from '../../entities/schemas/login';
import { IUser } from '../../entities/schemas/user';
import { User } from '../../entities/User';

export default interface IUsersService {
  create: (user: IUser) => Promise<Partial<User> | Error>;
  getAll: () => Promise<Partial<User>[]>;
  getById: (id: string) => Promise<Partial<User> | Error>;
  getByName: (username: string) => Promise<null | Error>;
  login: (userLogin: ILogin) => Promise<Partial<User>>;
  update: (id: string, user: IUser) => Promise<boolean | Error>;
  remove: (id: string) => Promise<boolean | Error>;
}
