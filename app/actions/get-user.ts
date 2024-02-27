import { db } from "@/lib/db";

export const getUser = async () => {
  try {
    const user = await db.user.findMany();
    return user;
  } catch (error) {
    console.log("Error From getUser", { error });
    return [];
  }
};
