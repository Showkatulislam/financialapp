import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface activityProps{
  report:report
}
export const Activity = ({report}:activityProps) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.activity[index]} />
      <div>
        <h3 className="font-semibold text-base">{dic.Nace[index]}</h3>
        <p className="text-sm">{report?.nace}</p>
      </div>
    </div>
  );
};
