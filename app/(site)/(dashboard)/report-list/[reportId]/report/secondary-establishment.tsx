import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";

interface SecondaryEstablishmentprops {
  report: report;
}
export const SecondaryEstablishment = ({
  report,
}: SecondaryEstablishmentprops) => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="SECONDARY ESTABLISHMENTS" />
      <div>
        <p className="text-justify">{report?.secondyestablishment}</p>
      </div>
    </div>
  );
};
