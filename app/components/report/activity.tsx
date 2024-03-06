import ReportTitle from "@/app/components/report-title";
import { ReportState } from "@/hooks/ReportState";

export const Activity = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ACTIVITY" />
      <div>
        <h3 className="font-semibold text-base">Nace</h3>
        <p className="text-sm">{report.nace}</p>
      </div>
    </div>
  );
};
