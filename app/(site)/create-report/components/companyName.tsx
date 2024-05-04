import InputField from "@/app/share//inputs/InputFields";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

export const CompanyName = () => {
  const { report, setTextField } = ReportState();
  const {LAN}=useLanguage()
  return (
    <div className="col-span-12">
      <div className="border p-2">
        <InputField
          name="companyName"
          placeholder={`${LAN == "EN" ? dic.companyName[0] : dic.companyName[1]}`}
          setValue={setTextField}
          value={report.companyName}
        />
      </div>
    </div>
  );
};
