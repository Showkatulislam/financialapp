import { GetReportById } from "@/app/actions/GetReportById";
import { Reportpreview } from "./report/report-preview";

const page = async ({ params }: { params: { reportId: string } }) => {
  const report = await GetReportById(params.reportId);
  return (
    <div>
      <Reportpreview report={report}/>
    </div>
  );
};

export default page;
