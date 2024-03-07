import { db } from "@/lib/db";
import { initailUser } from "@/lib/intial-user";

export const getUser = async () => {
  try {
    const iam=await initailUser()
    const user = await db.user.findMany({
      where:{
       id:{
        not:iam.id
       } 
      }
    });
    return user;
  } catch (error) {
    console.log("Error From getUser", { error });
    return [];
  }
};
