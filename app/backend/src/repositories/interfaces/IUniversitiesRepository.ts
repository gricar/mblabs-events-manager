import { IUniversity } from '../../entities/schemas/university';
import { University } from '../../entities/University';

export default interface IUniversitiesRepository {
  create: (university: IUniversity) => Promise<Partial<University>>;
  getAll: () => Promise<Partial<University>[]>;
  getById: (id: string) => Promise<Partial<University> | null>;
  getByName: (name: string) => Promise<University | null>;
  update: (id: string, university: IUniversity) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
}
