import InputField from "@/app/components/inputs/InputFields";
import { ReportState } from "@/hooks/ReportState";

export const CompanyName = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12">
      <div className="border p-2">
        <InputField
          name="companyName"
          placeholder="Company Name"
          setValue={setTextField}
          value={report.companyName}
        />
      </div>
    </div>
  );
};
