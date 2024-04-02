import { db } from "@/lib/db";
import { initailUser } from "@/lib/intial-user";
import { MemberRole } from "@prisma/client";
export const GetReports = async () => {
  const iam=await initailUser()
  console.log(iam.userId);
  try {
    let reports;
    if(iam.role==MemberRole.ADMIN){
      reports = await db.report.findMany({})
    }else{
      reports = await db.report.findMany({
        where:{
          userId:iam.userId
        }
      })
    }
    return reports
  } catch (error) {
    console.log("Error Comming From Report Get Route", error);
    return [];
  }
};
