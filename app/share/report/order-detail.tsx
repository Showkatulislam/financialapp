import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
export const OrderDetail = () => {
  const { report } = ReportState();
  const { LAN } = useLanguage();
  const { client, object, reference, priority, language, creditRequested } =
    report;
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle
        title={`${LAN == "EN" ? dic.orderdetail[0] : dic.orderdetail[1]}`}
      />
      <div>
        <ReportItem
          title={`${LAN == "EN" ? dic.client[0] : dic.client[1]}`}
          description={client}
        />
        <ReportItem
          title={`${LAN == "EN" ? dic.object[0] : dic.object[1]}`}
          description={object}
        />
        <ReportItem
          title={`${LAN == "EN" ? dic.reference[0] : dic.reference[1]}`}
          description={reference}
        />
        <ReportItem
          title={`${LAN == "EN" ? dic.priority[0] : dic.priority[1]}`}
          description={priority}
        />
        <ReportItem title="Language" description={language} />
        <ReportItem
          title={`${
            LAN == "EN" ? dic.creditRequested[0] : dic.creditRequested[1]
          }`}
          description={creditRequested}
        />
      </div>
    </div>
  );
};
