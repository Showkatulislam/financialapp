import CapitalItem from "@/app/components/capital-item";
import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";
import moment from "moment";
interface OfficialCompanyDataProps {
  report: report;
}
export const OfficialCompanyData = ({ report }: OfficialCompanyDataProps) => {
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="OFFICIAL COMPANY DATA" />
      <div>
        <ReportItem title="Legal status" description={report.legalStatus} />
        <ReportItem
          title="Unique identifier
"
          bg={true}
          description={report.uniqueIdentifier}
        />
        <ReportItem
          title="Creation date"
          description={moment(report.creationData).format("YYYY/MM/DD")}
        />
        <ReportItem
          title="Activity status"
          bg={true}
          description={moment(report.startOfActivity).format("YYYY.MM.DD")}
        />
        <CapitalItem
          title="Share capital"
          capital={report.Sharecapital}
          text={report.Sharecapitaltext}
        />
        <CapitalItem
          title="Pre Share capital"
          bg={true}
          capital={report.preShareCapital}
          text={report.preShareCapitaltext}
        />
      </div>
    </div>
  );
};
