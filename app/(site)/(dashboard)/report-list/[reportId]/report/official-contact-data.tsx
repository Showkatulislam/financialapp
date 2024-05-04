import CapitalItem from "@/app/share//capital-item";
import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import moment from "moment";
interface OfficialCompanyDataProps {
  report: report;
}
export const OfficialCompanyData = ({ report }: OfficialCompanyDataProps) => {
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;

  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.OfficialCompanyData[index]} />
      <div>
        {report.legalStatus && (
          <ReportItem
            title={dic.legalStatus[index]}
            description={report.legalStatus}
          />
        )}
        {report.uniqueIdentifier && (
          <ReportItem
            title={dic.uniqueIdentifier[index]}
            bg={true}
            description={report.uniqueIdentifier}
          />
        )}
        {report.creationData && (
          <ReportItem
            title={dic.CreationDate[index]}
            description={moment(report.creationData).format("YYYY/MM/DD")}
          />
        )}

        {report.startOfActivity && (
          <ReportItem
            title={dic.Startofactivity[index]}
            bg={true}
            description={moment(report.startOfActivity).format("YYYY/MM/DD")}
          />
        )}

        {report.Sharecapital && (
          <CapitalItem
            title={dic.Sharecapital[index]}
            capital={report.Sharecapital}
            text={report.Sharecapitaltext}
          />
        )}
        {report.preShareCapital && (
          <CapitalItem
            title={dic.preSharecapital[index]}
            bg={true}
            capital={report.preShareCapital}
            text={report.preShareCapitaltext}
          />
        )}
        {
          report.OfficialCompanyDatacmd && (
            <ReportItem
            title="comment"
            bg={true}
            description={report.OfficialCompanyDatacmd}
          />
          )
        }
      </div>
    </div>
  );
};
