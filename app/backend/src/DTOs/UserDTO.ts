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
