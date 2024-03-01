import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  productName: z.string(),
  country: z.string(),
  language:z.string(),
  price: z.string()
});

export type Product = z.infer<typeof ProductSchema>;
