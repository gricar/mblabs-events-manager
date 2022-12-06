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

  public getAll = async (): Promise<Partial<University>[]> => {
    return this.universitiesRepository.find({
      select: {
        id: true,
        name: true,
      },
    });
  };

  public getById = async (id: string): Promise<Partial<University> | null> => {
    return this.universitiesRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
      relations: {
        events: true,
      },
    });
  };

  public getByName = async (name: string): Promise<University | null> => {
    return this.universitiesRepository.findOne({
      where: { name },
    });
  };

  public update = async (id: string, { name }: IUniversity): Promise<boolean> => {
    const { affected } = await this.universitiesRepository.update({ id }, { name });
    return affected == 1;
  };

  public remove = async (id: string): Promise<boolean> => {
    const { affected } = await this.universitiesRepository.delete({
      id,
    });
    return affected == 1;
  };
}
