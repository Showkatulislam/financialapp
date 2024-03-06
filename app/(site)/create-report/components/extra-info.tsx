import TextField from "@/app/components/inputs/TextField";
import { ReportState } from "@/hooks/ReportState";

export const ExtraInfo = () => {
  const { report, setTextField } = ReportState();
  return (
    <>
      <div className="col-span-12 space-y-3">
        <TextField
          name="secondyestablishment"
          placeholder="secondyestablishment"
          setValue={setTextField}
          value={report.secondyestablishment}
        />
      </div>
      <div className="col-span-12">
        <TextField
          name="officailpublication"
          placeholder="officailpublication"
          setValue={setTextField}
          value={report.officailpublication}
        />
      </div>
    </>
  );
};
