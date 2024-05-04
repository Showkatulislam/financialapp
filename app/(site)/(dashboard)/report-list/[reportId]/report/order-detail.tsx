import ReportItem from "@/app/share//report-item";
import ReportTitle from "@/app/share//report-title";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface orderDetailProps {
  report: report;
}
export const OrderDetail = ({ report }: orderDetailProps) => {
  const { client, object, reference, priority, language, creditRequested } =
    report;
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title={dic.orderdetail[index]} />
      <div>
        {client && (
          <ReportItem title={dic.client[index]} description={client} />
        )}
        {object && (
          <ReportItem
            bg={true}
            title={dic.object[index]}
            description={object}
          />
        )}
        {reference && (
          <ReportItem title={dic.reference[index]} description={reference} />
        )}
        {priority && (
          <ReportItem
            bg={true}
            title={dic.priority[index]}
            description={priority}
          />
        )}
        {language && <ReportItem title="Language" description={language} />}

        {creditRequested && (
          <ReportItem
            bg={true}
            title={dic.creditRequested[index]}
            description={creditRequested}
          />
        )}
      </div>
    </div>
  );
};
