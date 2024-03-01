import { z } from "zod";
import { ProductSchema } from "../../product-list/component/schema";
import { ClientSchema } from "../../client-list/component/schema";

export const OrderSchema = z.object({
  id: z.string(),
  dob: z.date(),
  priority: z.string(),
  companyName:z.string(),
  userId:z.string(),
  clientId:z.string(),
  productId:z.string(),
  product:ProductSchema,
  client:ClientSchema
});

export type Order = z.infer<typeof OrderSchema>;
