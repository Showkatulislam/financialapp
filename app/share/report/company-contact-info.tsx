import ReportTitle from "../report-title";
import ReportItem from "../report-item";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const CompanyContact = () => {
  const { report } = ReportState();
  const { LAN } = useLanguage();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle
        title={`${LAN === "EN" ? dic.companyinfo[0] : dic.companyinfo[1]}`}
      />
      <div>
        <ReportItem
          title={`${LAN === "EN" ? dic.denomination[0] : dic.denomination[1]}`}
          description={report.Denomination}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.address[0] : dic.address[1]}`}
          description={report.address}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.email[0] : dic.email[1]}`}
          description={report.email}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.Fax[0] : dic.Fax[1]}`}
          description={report.fax}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.Mobile[0] : dic.Mobile[1]}`}
          description={report.mobile}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.Telephone[0] : dic.Telephone[1]}`}
          description={report.tel}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.Website[0] : dic.Website[1]}`}
          description={report.website}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.nif[0] : dic.nif[1]}`}
          description={report.nif}
        />
        <ReportItem
          title={`${LAN === "EN" ? dic.nis[0] : dic.nis[1]}`}
          description={report.nis}
        />
      </div>
    </div>
  );
};
