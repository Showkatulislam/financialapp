import ReportTitle from "@/app/share//report-title";
import { CL } from "@/app/utils/change-language";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

export const Activity = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.activity[index]} />
      <div>
        <h3 className="font-semibold text-base">{CL("Nace")}</h3>
        <p className="text-sm">{report.nace}</p>
        <p className="font-semibold text-base">Comment</p>
        <p>{report.nacecomment}</p>
      </div>
    </div>
  );
};
