import { IUniversity } from '../../entities/schemas/university';
import { University } from '../../entities/University';

export default interface IUniversitiesRepository {
  create: (university: IUniversity) => Promise<Partial<University>>;
  getByName: (name: string) => Promise<Partial<University> | null>;
}
