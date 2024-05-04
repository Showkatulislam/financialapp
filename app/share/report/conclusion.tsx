import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const Conclusion:any = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={dic.conclusion[index]} />
      <div className="text-base font-light">{report.conclusion}</div>
    </div>
  );
};
