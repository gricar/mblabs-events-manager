import { IUser } from '../../entities/schemas/user';

export default interface IUsersRepository {
  create: (user: IUser) => Promise<IUser>;
  getAll: () => Promise<IUser[]>;
}
