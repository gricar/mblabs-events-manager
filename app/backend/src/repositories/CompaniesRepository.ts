import { AppDataSource } from '../database/data-source';
import { Repository } from 'typeorm';
import ICompaniesRepository from './interfaces/ICompaniesRepository';
import { ICompany } from '../entities/schemas/company';
import { Company } from '../entities/Company';

export class CompaniesRepository implements ICompaniesRepository {
  private companiesRepository: Repository<Company>;

  constructor() {
    this.companiesRepository = AppDataSource.getRepository(Company);
  }

  public create = async ({ name }: ICompany): Promise<Partial<Company>> => {
    const newCompany = this.companiesRepository.create({
      name,
    });

    await this.companiesRepository.save(newCompany);

    const { id } = newCompany;

    return { id, name };
  };

  public getAll = async (): Promise<Partial<Company>[]> => {
    return this.companiesRepository.find({
      select: {
        id: true,
        name: true,
      },
    });
  };

  public getById = async (id: string): Promise<Partial<Company> | null> => {
    return this.companiesRepository.findOne({
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

  public getByName = async (name: string): Promise<Company | null> => {
    return this.companiesRepository.findOne({
      where: { name },
    });
  };

  public update = async (id: string, { name }: ICompany): Promise<boolean> => {
    const { affected } = await this.companiesRepository.update({ id }, { name });
    return affected == 1;
  };

  public remove = async (id: string): Promise<boolean> => {
    const { affected } = await this.companiesRepository.delete({
      id,
    });
    return affected == 1;
  };
}
