import ReportTitle from "../report-title";
import ReportItem from "../report-item";
import { ReportState } from "@/hooks/ReportState";

export const CompanyContact = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="Company Contact" />
      <div>
        <ReportItem title="Customer" description={report.Denomination} />
        <ReportItem title="Address" description={report.address} />
        <ReportItem
          title="Email
  "
          description={report.email}
        />
        <ReportItem title="Fax" description={report.fax} />
        <ReportItem title="Mobile" description={report.mobile} />
        <ReportItem title="Tel" description={report.tel} />
        <ReportItem title="Website" description={report.website} />
      </div>
    </div>
  );
};
