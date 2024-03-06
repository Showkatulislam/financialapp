import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";

export const SecondaryEstablishment = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="SECONDARY ESTABLISHMENTS" />
      <div>
        <p className="text-justify">{report.secondyestablishment}</p>
      </div>
    </div>
  );
};
