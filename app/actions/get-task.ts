import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import getCurrentUser from "./get-user";

export const getallTask = async () => {
  const Iam=await getCurrentUser()
  try {
    let task;
    if(Iam?.role==MemberRole.ADMIN){
      task=await db.order.findMany({
        include:{
          user:true,
          client:true,
          product:true
        }
      })
    }else{
      task = await db.order.findMany({
        where:{
          userId:Iam?.id
        },
        include:{
          user:true,
          client:true,
          product:true
        }
      })
    }
    console.log(task);
    
    if(!task){
      return []
    }
    return task;
  } catch (error) {
    console.log(error);
    
    return [];
  }
};
