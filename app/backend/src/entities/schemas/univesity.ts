import { z } from 'zod';

const UnivesitySchema = z.object({
  name: z.string(),
});

type IUnivesity = z.infer<typeof UnivesitySchema>;

export { UnivesitySchema, IUnivesity };
