import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import getCurrentUser from "./get-user";
export const GetReports = async () => {
  const iam=await getCurrentUser()
  try {
    let reports;
    if(iam?.role==MemberRole.ADMIN){
      reports = await db.report.findMany({})
    }else{
      reports = await db.report.findMany({
        where:{
          userId:iam?.id
        }
      })
    }
    return reports
  } catch (error) {
    console.log("Error Comming From Report Get Route", error);
    return [];
  }
};
