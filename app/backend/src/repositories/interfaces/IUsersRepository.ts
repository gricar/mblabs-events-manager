import { IUser } from '../../entities/schemas/user';

export default interface IUsersRepository {
  getAll: () => Promise<IUser[]>;
}
