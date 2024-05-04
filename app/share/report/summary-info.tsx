import CapitalItem from "@/app/share//capital-item";
import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { Paymentscolors, Riskcolors } from "@/app/constant/routes";
import { ReportState } from "@/hooks/ReportState";
import { Payments, riskRating } from "@/public/dropdownData";
import { CL } from "@/app/utils/change-language";

export const SummaryInfo = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={CL("summary")} />
      <div>
        <ReportItem
          title={CL("riskRating")} 
          description={report.riskRating}
          className={
            report.riskRating
              ? Riskcolors[riskRating.indexOf(report.riskRating)]
              : ""
          }
        />
        <ReportItem
        title={CL("paymentExperience")} 
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
        />
        <CapitalItem
         title={CL("equivalentToCredit")} 
          capital={report.equivalentToCredit}
          text={report.equivalentToCreditText}
        />
      </div>
    </div>
  );
};
