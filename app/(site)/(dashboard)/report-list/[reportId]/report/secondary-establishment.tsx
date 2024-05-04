import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

interface SecondaryEstablishmentprops {
  report: report;
}
export const SecondaryEstablishment = ({
  report,
}: SecondaryEstablishmentprops) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title={dic.secondyestablishment[index]} />
      <div>
        <p className="text-justify">{report?.secondyestablishment}</p>
      </div>
    </div>
  );
};
