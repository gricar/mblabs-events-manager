import { Company } from '../../entities/Company';
import { ICompany } from '../../entities/schemas/company';

export default interface ICompaniesRepository {
  create: (company: ICompany) => Promise<Partial<Company>>;
  getAll: () => Promise<Partial<Company>[]>;
  getById: (id: string) => Promise<Partial<Company> | null>;
  getByName: (name: string) => Promise<Company | null>;
  update: (id: string, company: ICompany) => Promise<boolean>;
  remove: (id: string) => Promise<boolean>;
}
