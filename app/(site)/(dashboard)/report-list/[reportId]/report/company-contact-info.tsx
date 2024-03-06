import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";

interface CompanyContactProps {
  report: report;
}
export const CompanyContact = ({ report }: CompanyContactProps) => {
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="Company Contact" />
      <div>
        <ReportItem title="Customer" description={report.Denomination} />
        <ReportItem bg={true} title="Address" description={report.address} />
        <ReportItem
          title="Email
  "
          description={report.email}
        />
        <ReportItem bg={true} title="Fax" description={report.fax} />
        <ReportItem title="Mobile" description={report.mobile} />
        <ReportItem bg={true} title="Tel" description={report.tel} />
        <ReportItem title="Website" description={report.website} />
      </div>
    </div>
  );
};
