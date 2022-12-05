import { ICompany } from '../../entities/schemas/company';
import { Company } from '../../entities/Company';

export default interface ICompaniesService {
  create: (company: ICompany) => Promise<Partial<Company> | Error>;
  getAll: () => Promise<Partial<Company>[]>;
  getByName: (companyName: string) => Promise<null | Error>;
}
