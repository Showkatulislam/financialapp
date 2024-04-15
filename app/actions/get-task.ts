import { db } from "@/lib/db";
import { initailUser } from "@/lib/intial-user";
import { MemberRole } from "@prisma/client";

export const getallTask = async () => {
  const Iam=await initailUser()
  try {
    let task;
    if(Iam.role==MemberRole.ADMIN){
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
          userId:Iam.id
        },
        include:{
          user:true,
          client:true,
          product:true
        }
      })
    }
    if(!task){
      return []
    }
    return task;
  } catch (error) {
    return [];
  }
};
