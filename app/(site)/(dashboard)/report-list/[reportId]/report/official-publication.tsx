import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";
interface props{
  report:report
}
export const OfficailPublication = ({report}:props) => {
  return (
    <div>
      <ReportTitle title="OFFICIAL PUBLICATIONS" />
      <div>
        <p className="text-base">
        {report.officailpublication}
        </p>
      </div>
    </div>
  );
};
