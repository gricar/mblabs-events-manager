import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import IUniversitiesRepository from './interfaces/IUniversitiesRepository';
import { IUniversity } from '../entities/schemas/university';
import { University } from '../entities/University';

export class UniversitiesRepository implements IUniversitiesRepository {
  private universitiesRepository: Repository<University>;

  constructor() {
    this.universitiesRepository = AppDataSource.getRepository(University);
  }

  public create = async ({ name }: IUniversity): Promise<Partial<University>> => {
    const newUniversity = this.universitiesRepository.create({
      name,
    });

    await this.universitiesRepository.save(newUniversity);

    const { id } = newUniversity;

    return { id, name };
  };

  public getByName = async (name: string): Promise<Partial<University> | null> => {
    return this.universitiesRepository.findOne({
      where: { name },
    });
  };
}
