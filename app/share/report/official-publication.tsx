import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const OfficailPublication = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={dic.officailpublication[index].toUpperCase()}/>
      <div>
        <p className="text-base">{report.officailpublication}</p>
      </div>
    </div>
  );
};
