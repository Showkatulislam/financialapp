import { useReportStore } from "@/hooks/useReportStore";
import ReportTitle from "../report-title";
import ReportItem from "../report-item";

export const CompanyContact = () => {
  const { companydetail } = useReportStore();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="Company Contact" />
      <div>
        <ReportItem title="Customer" description={companydetail.Denomination} />
        <ReportItem title="Address" description={companydetail.address} />
        <ReportItem
          title="Email
  "
          description={companydetail.email}
        />
        <ReportItem title="Fax" description={companydetail.fax} />
        <ReportItem title="Mobile" description={companydetail.mobile} />
        <ReportItem title="Tel" description={companydetail.tel} />
        <ReportItem title="Website" description={companydetail.website} />
      </div>
    </div>
  );
};
