import { IUser } from '../../entities/schemas/user';

export default interface IUsersService {
  getAll: () => Promise<IUser[]>;
}
