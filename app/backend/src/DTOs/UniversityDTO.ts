import { University } from '../entities/University';

export interface UniversityDTO {
  id: string;
  name: string;
  events?: {
    name: string;
    eventDay: string;
    ticketsAvailable: number;
  }[];
}

export const mapperUniversityDto = (sponsor: Partial<University>): UniversityDTO => ({
  id: sponsor.id || '',
  name: sponsor.name || '',
  events: sponsor.events?.map((e) => ({
    name: e.name,
    eventDay: e.eventDay.toLocaleDateString(),
    ticketsAvailable: e.ticketsAvailable,
  })),
});
