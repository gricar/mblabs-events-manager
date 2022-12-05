import { z } from 'zod';

const UserSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  cpf: z.string().max(11),
  password: z.string(),
});

type IUser = z.infer<typeof UserSchema>;

export { UserSchema, IUser };
