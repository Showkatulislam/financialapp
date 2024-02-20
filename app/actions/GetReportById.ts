import { db } from "@/lib/db";

export const GetReportById =async(reportId:string) => {
    try {
        const report=await db.report.findUnique({
            where:{
                id:reportId
            }
        })
        return report
    } catch (error) {
        console.log("Error Comming from ReportId");
        return null
        
    }
};