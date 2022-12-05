import { z } from 'zod';

const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type ILogin = z.infer<typeof LoginSchema>;

export { LoginSchema, ILogin };
