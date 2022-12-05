import IUniversitiesRepository from '../repositories/interfaces/IUniversitiesRepository';
import { UniversitiesRepository } from '../repositories/UniversitiesRepository';
import IUniversitiesService from './interfaces/IUniversitiesService';
import { University } from '../entities/University';
import { ConflictError } from '../helpers/api-errors';
import { IUniversity } from '../entities/schemas/university';

export class UniversitiesService implements IUniversitiesService {
  private readonly universitiesRepo: IUniversitiesRepository;

  constructor() {
    this.universitiesRepo = new UniversitiesRepository();
  }

  public create = async (university: IUniversity): Promise<Partial<University> | Error> => {
    await this.getByName(university.name);

    return this.universitiesRepo.create(university);
  };

  public getByName = async (universityName: string): Promise<null | Error> => {
    const universityExist = await this.universitiesRepo.getByName(universityName);

    if (universityExist) {
      throw new ConflictError('University name already exists!');
    }

    return universityExist;
  };
}
