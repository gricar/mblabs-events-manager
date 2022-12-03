import { IUser } from '../../entities/schemas/user';

export default interface IUsersService {
  create: (user: IUser) => Promise<IUser>;
  getAll: () => Promise<IUser[]>;
}
