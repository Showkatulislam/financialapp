import { z } from "zod";

export const ClientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  address:z.string(),
  phone:z.string(),
  contact1:z.string()
});

export type Client = z.infer<typeof ClientSchema>;
