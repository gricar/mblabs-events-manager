import { IUser } from '../../entities/schemas/user';
import { User } from '../../entities/User';

export default interface IUsersRepository {
  create: (user: IUser) => Promise<Partial<User>>;
  getAll: () => Promise<Partial<User>[]>;
  getByName: (username: string) => Promise<Partial<User> | null>;
  getById: (id: string) => Promise<Partial<User> | null>;
  update: (id: string, user: IUser) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
}
