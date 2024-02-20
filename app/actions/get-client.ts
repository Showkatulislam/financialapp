import { db } from "@/lib/db";

export const GetClient = async () => {
  try {
    const clients = await db.client.findMany({});
    return clients;
  } catch (error) {
    console.log("Error Comming From Client", error);
    return [];
  }
};
