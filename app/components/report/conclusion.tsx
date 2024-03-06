import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";

export const Conclusion = () => {
  const { report } = ReportState();
  return (
    <div>
      <ReportTitle title="Conclusion" />
      <div className="text-base font-light">{report.conclusion}</div>
    </div>
  );
};
