import TextField from "@/app/share//inputs/TextField";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

export const ExtraInfo = () => {
  const { report, setTextField } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <>
      <div className="col-span-12 space-y-4">
      <TextField
          name="bankComment"
          placeholder={`${dic.bank[index]} ${dic.comment[index]}`}
          setValue={setTextField}
          value={report.bankComment}
        />
        <TextField
          name="secondyestablishment"
          placeholder={dic.secondyestablishment[index]}
          setValue={setTextField}
          value={report.secondyestablishment}
        />
      </div>
      <div className="col-span-12">
        <TextField
          name="officailpublication"
          placeholder={dic.officailpublication[index]}
          setValue={setTextField}
          value={report.officailpublication}
        />
        <TextField
          name="conclusion"
          placeholder={dic.conclusion[index]}
          setValue={setTextField}
          value={report.conclusion}
        />
      </div>
    </>
  );
};
