import ReportTitle from "@/app/components/report-title";
import { useReportStore } from "@/hooks/useReportStore";

export const Activity = () => {
  const {extrainfo}=useReportStore()
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ACTIVITY" />
      <div>
        <h3 className="font-semibold text-base">Nace</h3>
        <p className="text-sm">{extrainfo.nace}</p>
      </div>
    </div>
  );
};
