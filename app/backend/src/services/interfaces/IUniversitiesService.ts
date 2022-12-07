import { IUniversity } from '../../entities/schemas/university';
import { University } from '../../entities/University';
import { UniversityDTO } from '../../DTOs/UniversityDTO';

export default interface IUniversitiesService {
  create: (university: IUniversity) => Promise<Partial<University> | Error>;
  getAll: () => Promise<Partial<University>[]>;
  getById: (id: string) => Promise<Partial<UniversityDTO> | Error>;
  getByName: (universityName: string) => Promise<null | Error>;
  update: (id: string, university: IUniversity) => Promise<boolean | Error>;
  remove: (id: string) => Promise<boolean | Error>;
}
