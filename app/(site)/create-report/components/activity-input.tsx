
import DropDownField from "@/app/components/inputs/Dropdown";
import { nace } from "@/app/data/routes";
import { ReportState } from "@/hooks/ReportState";
export const ActivityInput = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12">
        <DropDownField
          value={report.client}
          setValue={setTextField}
          name="nace"
          placeholder="Nace"
          type1={true}
          items={nace}
        />
    </div>
  );
};
