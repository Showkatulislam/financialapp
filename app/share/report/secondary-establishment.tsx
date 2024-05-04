import { ReportState } from "@/hooks/ReportState";
import ReportTitle from "../report-title";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const SecondaryEstablishment = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title={dic.secondyestablishment[index].toUpperCase()} />
      <div>
        <p className="text-justify">{report.secondyestablishment}</p>
      </div>
    </div>
  );
};
