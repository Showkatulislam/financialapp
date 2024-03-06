import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";

export const OfficailPublication = () => {
  const { report } = ReportState();
  return (
    <div>
      <ReportTitle title="OFFICIAL PUBLICATIONS" />
      <div>
        <p className="text-base">{report.officailpublication}</p>
      </div>
    </div>
  );
};
