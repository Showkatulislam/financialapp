import CapitalItem from "@/app/share//capital-item";
import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { CL } from "@/app/utils/change-language";
import { ReportState } from "@/hooks/ReportState";
import moment from "moment";

export const OfficialCompanyData = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={CL("OfficialCompanyData")} />
      <div>
        <ReportItem title={CL("legalStatus")} description={report.legalStatus} />
        <ReportItem
          title={CL("uniqueIdentifier")}
          description={report.uniqueIdentifier}
        />
        <ReportItem
          title={CL("CreationDate")}
          description={moment(report.creationData).format("YYYY/MM/DD")}
        />
        <ReportItem
          title={CL("Startofactivity")}
          description={moment(report.startOfActivity).format("YYYY.MM.DD")}
        />
        <CapitalItem
          title={CL("Sharecapital")}
          capital={report.Sharecapital}
          text={report.Sharecapitaltext}
        />
        <CapitalItem
          title={CL("preSharecapital")}
          capital={report.preShareCapital}
          text={report.preShareCapitaltext}
        />
      </div>
    </div>
  );
};
