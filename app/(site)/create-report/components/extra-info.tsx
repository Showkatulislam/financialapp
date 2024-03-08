import TextField from "@/app/components/inputs/TextField";
import { ReportState } from "@/hooks/ReportState";

export const ExtraInfo = () => {
  const { report, setTextField } = ReportState();
  return (
    <>
      <div className="col-span-12 space-y-4">
      <TextField
          name="bankComment"
          placeholder="Bank Comment"
          setValue={setTextField}
          value={report.bankComment}
        />
        <TextField
          name="secondyestablishment"
          placeholder="Secondy Establishment"
          setValue={setTextField}
          value={report.secondyestablishment}
        />
      </div>
      <div className="col-span-12">
        <TextField
          name="officailpublication"
          placeholder="Officail Publication"
          setValue={setTextField}
          value={report.officailpublication}
        />
        <TextField
          name="conclusion"
          placeholder="Conclusion"
          setValue={setTextField}
          value={report.conclusion}
        />
      </div>
    </>
  );
};
