import { z } from "zod";
import { ClientSchema } from "../../client-list/component/schema";
import { userSchema } from "../../user-list/component/schema";
import { OrderSchema } from "../../order-list/component/schema";

export const taskSchema = z.object({
    id: z.string(),
    taskName:z.string(),
    requiredBy:z.date(),
    client:ClientSchema,
    user:userSchema,
    order:OrderSchema
  });