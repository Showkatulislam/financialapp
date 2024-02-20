import TextField from "@/app/components/inputs/TextField";
import { useReportStore } from "@/hooks/useReportStore";

export const ExtraInfo = () => {
  const { extrainfo, setExtreInfo } = useReportStore();
  return (
    <>
      <div className="col-span-12">
        <TextField
          name="secondyestablishment"
          placeholder="secondyestablishment"
          setValue={setExtreInfo}
          value={extrainfo.secondyestablishment}
        />
      </div>
      <div className="col-span-12">
        <TextField
          name="officailpublication"
          placeholder="officailpublication"
          setValue={setExtreInfo}
          value={extrainfo.officailpublication}
        />
      </div>
    </>
  );
};
