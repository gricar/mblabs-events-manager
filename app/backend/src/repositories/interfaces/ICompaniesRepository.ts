import { Company } from '../../entities/Company';
import { ICompany } from '../../entities/schemas/company';

export default interface ICompaniesRepository {
  create: (company: ICompany) => Promise<Partial<Company>>;
  getAll: () => Promise<Partial<Company>[]>;
  getById: (id: string) => Promise<Partial<Company> | null>;
  getByName: (name: string) => Promise<Partial<Company> | null>;
}
