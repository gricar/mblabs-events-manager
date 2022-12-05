import { IUniversity } from '../../entities/schemas/university';
import { University } from '../../entities/University';

export default interface IUniversitiesService {
  create: (university: IUniversity) => Promise<Partial<University> | Error>;
  getAll: () => Promise<Partial<University>[]>;
  getByName: (universityName: string) => Promise<null | Error>;
}
