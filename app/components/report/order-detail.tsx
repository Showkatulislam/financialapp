import ReportItem from "@/app/components/report-item";
import ReportTitle from "@/app/components/report-title";
import { ReportState } from "@/hooks/ReportState";
export const OrderDetail = () => {
  const { report } = ReportState();
  const { client, object, reference, priority, language, creditRequested } =
    report;
  return (
    <div className="flex flex-col lg:space-y-2">
      <ReportTitle title="ORDER DETAIL" />
      <div>
        <ReportItem title="Customer" description={client} />
        <ReportItem title="Object" description={object} />
        <ReportItem
          title="Reference
"
          description={reference}
        />
        <ReportItem title="Priority" description={priority} />
        <ReportItem title="Language" description={language} />
        <ReportItem title="Credit requested" description={creditRequested} />
      </div>
    </div>
  );
};
