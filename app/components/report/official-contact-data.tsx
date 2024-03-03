import CapitalItem from "@/app/components/capital-item";
import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { useReportStore } from "@/hooks/useReportStore";

export const OfficialCompanyData = () => {
  const { officaldata } = useReportStore();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="OFFICIAL COMPANY DATA" />
      <div>
        <ReportItem
          title="Legal status"
          description={officaldata.legalStatus}
        />
        <ReportItem
          title="Unique identifier"
          description={officaldata.uniqueIdentifier}
        />
        <ReportItem
          title="Creation date"
          description={officaldata.creationData}
        />
        <ReportItem
          title="Activity status"
          description={officaldata.activityStatus}
        />
        <CapitalItem
          title="Share capital"
          capital={officaldata.Sharecapital}
          text={officaldata.Sharecapitaltext}
        />
        <CapitalItem
          title="Pre Share capital"
          capital={officaldata.preShareCapital}
          text={officaldata.preShareCapitaltext}
        />
      </div>
    </div>
  );
};
