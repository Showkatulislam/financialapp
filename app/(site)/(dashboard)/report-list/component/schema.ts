import {z } from "zod";

export const ReportSchema = z.object({
  id: z.string(),
  report:z.any()
});

export type Report = z.infer<typeof ReportSchema>;
