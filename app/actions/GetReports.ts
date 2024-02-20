import { db } from "@/lib/db";
export const GetReports = async () => {
  try {
    const reports = await db.report.findMany({})
    if(!reports){
      return null
    }
    return reports
  } catch (error) {
    console.log("Error Comming From Report Get Route", error);
    return [];
  }
};
