import { ICompany } from '../../entities/schemas/company';
import { Company } from '../../entities/Company';
import { CompanyDTO } from '../../DTOs/CompanyDTO';

export default interface ICompaniesService {
  create: (company: ICompany) => Promise<Partial<Company> | Error>;
  getAll: () => Promise<Partial<Company>[]>;
  getById: (id: string) => Promise<Partial<CompanyDTO> | Error>;
  getByName: (companyName: string) => Promise<null | Error>;
  update: (id: string, company: ICompany) => Promise<boolean | Error>;
  remove: (id: string) => Promise<boolean | Error>;
}
