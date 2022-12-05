import IUniversitiesRepository from '../repositories/interfaces/IUniversitiesRepository';
import { UniversitiesRepository } from '../repositories/UniversitiesRepository';
import IUniversitiesService from './interfaces/IUniversitiesService';
import { University } from '../entities/University';
import { ConflictError, NotFoundError } from '../helpers/api-errors';
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

  public getAll = async (): Promise<Partial<University>[]> => {
    return this.universitiesRepo.getAll();
  };

  public getById = async (id: string): Promise<Partial<University> | Error> => {
    const universityFound = await this.universitiesRepo.getById(id);

    if (!universityFound) {
      throw new NotFoundError('University not found!');
    }

    return universityFound;
  };

  public getByName = async (universityName: string): Promise<null | Error> => {
    const universityExist = await this.universitiesRepo.getByName(universityName);

    if (universityExist) {
      throw new ConflictError('University name already exists!');
    }

    return universityExist;
  };

  public update = async (id: string, university: IUniversity): Promise<boolean | Error> => {
    await this.getById(id);

    await this.getByName(university.name);

    const updatedSucess = await this.universitiesRepo.update(id, university);

    if (!updatedSucess) {
      throw new Error('Failed to update university');
    }

    return updatedSucess;
  };
}
