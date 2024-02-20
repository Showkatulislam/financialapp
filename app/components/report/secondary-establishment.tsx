import { useReportStore } from "@/hooks/useReportStore";
import ReportTitle from "../report-title";

export const SecondaryEstablishment = () => {
  const {extrainfo}=useReportStore()
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="SECONDARY ESTABLISHMENTS" />
      <div>
        <p className="text-justify">
          {extrainfo.secondyestablishment}
        </p>
      </div>
    </div>
  );
};
