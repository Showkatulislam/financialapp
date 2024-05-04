import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

interface CompanyContactProps {
  report: report;
}
export const CompanyContact = ({ report }: CompanyContactProps) => {
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.companyinfo[index]} />
      <div>
        {report.Denomination && (
          <ReportItem
            title={dic.client[index]}
            description={report.Denomination}
          />
        )}
        {report.address && (
          <ReportItem bg={true} title="Address" description={report.address} />
        )}
        {report.email && (
          <ReportItem title={dic.email[index]} description={report.email} />
        )}
        {report.fax && (
          <ReportItem
            bg={true}
            title={dic.Fax[index]}
            description={report.fax}
          />
        )}
        {report.mobile && (
          <ReportItem title={dic.Mobile[index]} description={report.mobile} />
        )}
        {report.tel && (
          <ReportItem
            bg={true}
            title={dic.Telephone[index]}
            description={report.tel}
          />
        )}
        {report.website && (
          <ReportItem title={dic.Website[index]} description={report.website} />
        )}
        {report.nif && (
          <ReportItem title={dic.nif[index]} description={report.nif} />
        )}
        {report.nis && (
          <ReportItem title={dic.nis[index]} description={report.nis} />
        )}
      </div>
    </div>
  );
};
