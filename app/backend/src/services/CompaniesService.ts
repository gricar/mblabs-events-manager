import ICompaniesRepository from '../repositories/interfaces/ICompaniesRepository';
import { CompaniesRepository } from '../repositories/CompaniesRepository';
import ICompaniesService from './interfaces/ICompaniesService';
import { ICompany } from '../entities/schemas/company';
import { Company } from '../entities/Company';
import { ConflictError, NotFoundError } from '../helpers/api-errors';

export class CompaniesService implements ICompaniesService {
  private readonly companiesRepository: ICompaniesRepository;

  constructor() {
    this.companiesRepository = new CompaniesRepository();
  }

  public create = async (company: ICompany): Promise<Partial<Company> | Error> => {
    await this.getByName(company.name);

    return this.companiesRepository.create(company);
  };

  public getAll = async (): Promise<Partial<Company>[]> => {
    return this.companiesRepository.getAll();
  };

  public getById = async (id: string): Promise<Partial<Company> | Error> => {
    const companyFound = await this.companiesRepository.getById(id);

    if (!companyFound) {
      throw new NotFoundError('Company not found!');
    }

    return companyFound;
  };

  public getByName = async (companyName: string): Promise<null | Error> => {
    const companyExist = await this.companiesRepository.getByName(companyName);

    if (companyExist) {
      throw new ConflictError('Company name already exists!');
    }

    return companyExist;
  };

  public update = async (id: string, company: ICompany): Promise<boolean | Error> => {
    await this.getById(id);

    await this.getByName(company.name);

    const updatedSucess = await this.companiesRepository.update(id, company);

    if (!updatedSucess) {
      throw new Error('Failed to update company');
    }

    return updatedSucess;
  };
}
