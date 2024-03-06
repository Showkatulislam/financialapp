import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";
interface activityProps{
  report:report
}
export const Activity = ({report}:activityProps) => {
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ACTIVITY" />
      <div>
        <h3 className="font-semibold text-base">Nace</h3>
        <p className="text-sm">{report?.nace}</p>
      </div>
    </div>
  );
};
