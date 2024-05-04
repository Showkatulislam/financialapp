import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface props{
  report:report
}
export const OfficailPublication = ({report}:props) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={dic.officailpublication[index]} />
      <div>
        <p className="text-base">
        {report.officailpublication}
        </p>
      </div>
    </div>
  );
};
