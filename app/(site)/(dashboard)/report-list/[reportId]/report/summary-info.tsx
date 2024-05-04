import CapitalItem from "@/app/share//capital-item";
import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { Paymentscolors, Riskcolors } from "@/app/constant/routes";
import { report } from "@/hooks/ReportState";
import { Payments, riskRating } from "@/public/dropdownData";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";
interface SummaryInfoProps {
  report: report;
}
export const SummaryInfo = ({ report }: SummaryInfoProps) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.summary[index]} />
      <div>
        <ReportItem
        title={dic.riskRating[index]}
          description={report.riskRating}
          className={
            report.riskRating
              ? Riskcolors[riskRating.indexOf(report.riskRating)]
              : ""
          }
          bg={true}
        />
        <ReportItem
          title={dic.paymentExperience[index]}
          description={report.paymentExperience}
          className={
            report.paymentExperience
              ? Paymentscolors[Payments.indexOf(report.paymentExperience)]
              : ""
          }
        />
        <CapitalItem
          title={dic.recommendCredit[index]}
          capital={report.recommendCredit}
          text={report.recommendCreditText}
          bg={true}
        />
        <CapitalItem
          title={dic.equivalentToCredit[index]}
          capital={report.equivalentToCredit}
          text={report.equivalentToCreditText}
        />
      </div>
    </div>
  );
};
