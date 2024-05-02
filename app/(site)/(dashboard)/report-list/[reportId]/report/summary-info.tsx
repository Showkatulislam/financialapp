import CapitalItem from "@/app/components/capital-item";
import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { Paymentscolors, Riskcolors } from "@/app/constant/routes";
import { report } from "@/hooks/ReportState";
import { Payments, riskRating } from "@/public/dropdownData";
interface SummaryInfoProps {
  report: report;
}
export const SummaryInfo = ({ report }: SummaryInfoProps) => {
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="SUMMARY" />
      <div>
        <ReportItem
          title="Credit rating"
          description={report.riskRating}
          className={
            report.riskRating
              ? Riskcolors[riskRating.indexOf(report.riskRating)]
              : ""
          }
          bg={true}
        />
        <ReportItem
          title="Payments Experience"
          description={report.paymentExperience}
          className={
            report.paymentExperience
              ? Paymentscolors[Payments.indexOf(report.paymentExperience)]
              : ""
          }
        />
        <CapitalItem
          title="Recommended outstanding"
          capital={report.recommendCredit}
          text={report.recommendCreditText}
          bg={true}
        />
        <CapitalItem
          title="Equivalent to"
          capital={report.equivalentToCredit}
          text={report.equivalentToCreditText}
        />
      </div>
    </div>
  );
};
