import { IUser } from '../../entities/schemas/user';
import { User } from '../../entities/User';

export default interface IUsersRepository {
  create: (user: IUser) => Promise<Partial<User>>;
  getAll: () => Promise<IUser[]>;
  getByName: (username: string) => Promise<IUser | null>;
}
