
import DropDownField from "@/app/share//inputs/Dropdown";
import { nace } from "@/app/constant/routes";
import { ReportState } from "@/hooks/ReportState";
import { CL } from "@/app/utils/change-language";
import TextField from "@/app/share/inputs/TextField";
export const ActivityInput = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 space-y-3">
        <DropDownField
          value={report.client}
          setValue={setTextField}
          name="nace"
          placeholder={CL("Nace")}
          type1={true}
          items={nace}
        />
        <TextField
        name="nacecomment"
        placeholder="Nace Comment"
        setValue={setTextField}
        value=""
        />
    </div>
  );
};
