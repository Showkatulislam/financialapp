import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { report } from "@/hooks/ReportState";
interface orderDetailProps {
  report: report;
}
export const OrderDetail = ({ report }: orderDetailProps) => {
  const { client, object, reference, priority, language, creditRequested } =
    report;
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ORDER DETAIL" />
      <div>
        <ReportItem title="Customer" description={client} />
        <ReportItem bg={true} title="Object" description={object} />
        <ReportItem
          title="Reference
"
          description={reference}
        />
        <ReportItem bg={true} title="Priority" description={priority} />
        <ReportItem title="Language" description={language} />
        <ReportItem
          bg={true}
          title="Credit requested"
          description={creditRequested}
        />
      </div>
    </div>
  );
};
