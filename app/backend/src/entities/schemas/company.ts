import { z } from 'zod';

const CompanySchema = z.object({
  name: z.string().min(4),
});

type ICompany = z.infer<typeof CompanySchema>;

export { CompanySchema, ICompany };
