import TextField from "@/app/components/inputs/TextField";
import { ReportState } from "@/hooks/ReportState";
export const ActivityInput = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12">
      <TextField
        name="nace"
        placeholder="Activity"
        setValue={setTextField}
        value={report.nace}
      />
    </div>
  );
};
