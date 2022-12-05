import { z } from 'zod';

const CompanySchema = z.object({
  name: z.string(),
});

type ICompany = z.infer<typeof CompanySchema>;

export { CompanySchema, ICompany };
