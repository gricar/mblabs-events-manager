import { z } from 'zod';

const UniversitySchema = z.object({
  name: z.string(),
});

type IUniversity = z.infer<typeof UniversitySchema>;

export { UniversitySchema, IUniversity };
