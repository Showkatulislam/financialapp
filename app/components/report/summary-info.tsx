import CapitalItem from "@/app/components/capital-item";
import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { useReportStore } from "@/hooks/useReportStore";

export const SummaryInfo = () => {
  const { summeryinfo } = useReportStore();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="SUMMARY" />
      <div>
        <ReportItem
          title="Credit rating"
          description={summeryinfo.riskRating}
        />
        <ReportItem
          title="Payments Experience"
          description={summeryinfo.paymentExperience}
        />
        <CapitalItem
          title="Recommended outstanding"
          capital={summeryinfo.recommendCredit}
          text={summeryinfo.recommendCreditText}
        />
        <CapitalItem
          title="Equivalent to"
          capital={summeryinfo.equivalentToCredit}
          text={summeryinfo.equivalentToCreditText}
        />
      </div>
    </div>
  );
};
