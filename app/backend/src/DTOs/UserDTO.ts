import { User } from '../entities/User';

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  cpf: string;
  events?: {
    name: string;
    eventDay: string;
  }[];
}

export const mapperUserDto = (user: Partial<User>): UserDTO => ({
  id: user.id!,
  username: user.username!,
  email: user.email!,
  cpf: user.cpf!,
  events: user.events?.map((e) => ({ name: e.name, eventDay: e.eventDay.toLocaleDateString() })),
});
