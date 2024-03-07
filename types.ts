import { Client, Order, Product } from "@prisma/client";
import { report } from "./hooks/ReportState";

export type OrderWithClientAndProduct = Order & { client: Client } & {
  product: Product;
};

export type Myreport = {
  id: string;
  report: report;
};
