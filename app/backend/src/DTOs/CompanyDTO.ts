import { Company } from '../entities/Company';

export interface CompanyDTO {
  id: string;
  name: string;
  events?: {
    name: string;
    eventDay: string;
    ticketsAvailable: number;
  }[];
}

export const mapperCompanyDto = (sponsor: Partial<Company>): CompanyDTO => ({
  id: sponsor.id || '',
  name: sponsor.name || '',
  events: sponsor.events?.map((e) => ({
    name: e.name,
    eventDay: e.eventDay.toLocaleDateString(),
    ticketsAvailable: e.ticketsAvailable,
  })),
});
