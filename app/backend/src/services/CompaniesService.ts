import ICompaniesRepository from '../repositories/interfaces/ICompaniesRepository';
import { CompaniesRepository } from '../repositories/CompaniesRepository';
import ICompaniesService from './interfaces/ICompaniesService';
import { ICompany } from '../entities/schemas/company';
import { Company } from '../entities/Company';
import { ConflictError } from '../helpers/api-errors';

export class CompaniesService implements ICompaniesService {
  private readonly companiesRepository: ICompaniesRepository;

  constructor() {
    this.companiesRepository = new CompaniesRepository();
  }

  public create = async (company: ICompany): Promise<Partial<Company> | Error> => {
    await this.getByName(company.name);

    return this.companiesRepository.create(company);
  };

  public getByName = async (companyName: string): Promise<null | Error> => {
    const companyExist = await this.companiesRepository.getByName(companyName);

    if (companyExist) {
      throw new ConflictError('Company name already exists!');
    }

    return companyExist;
  };
}
