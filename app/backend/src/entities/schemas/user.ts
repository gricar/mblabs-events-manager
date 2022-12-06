import { z } from 'zod';

const UserSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  cpf: z.string().max(11),
  password: z.string().min(4),
});

type IUser = z.infer<typeof UserSchema>;

export { UserSchema, IUser };
