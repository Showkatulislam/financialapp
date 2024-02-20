import { db } from "@/lib/db";

export const getProduct = async () => {
  try {
    const products = await db.product.findMany({});
    return products;
  } catch (error) {
    console.log("Error From get product", error);
    return [];
  }
};
