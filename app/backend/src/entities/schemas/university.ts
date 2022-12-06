import { z } from 'zod';

const UniversitySchema = z.object({
  name: z.string().min(4),
});

type IUniversity = z.infer<typeof UniversitySchema>;

export { UniversitySchema, IUniversity };
