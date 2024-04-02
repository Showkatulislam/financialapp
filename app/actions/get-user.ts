import { db } from "@/lib/db";
import { initailUser } from "@/lib/intial-user";

export const getUser = async () => {
  const iam=await initailUser()
  try {
    const user = await db.user.findMany({
      where:{
       id:{
        not:iam.id
       } 
      }
    });
    if(!user){
      return []
    }
    return user;
  } catch (error) {
    console.log("Error From getUser", { error });
    return [];
  }
};
