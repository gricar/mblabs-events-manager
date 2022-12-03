import { IUser } from '../../entities/schemas/user';
import { User } from '../../entities/User';

export default interface IUsersService {
  create: (user: IUser) => Promise<Partial<User> | Error>;
  getAll: () => Promise<Partial<User>[]>;
}
