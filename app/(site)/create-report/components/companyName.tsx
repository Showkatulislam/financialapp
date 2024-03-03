import InputField from "@/app/components/inputs/InputFields";
import { useReportStore } from "@/hooks/useReportStore";

export const CompanyName = () => {
  const { setComapanyName, companyName } = useReportStore();
  return (
    <div className="col-span-12">
      <div className="border p-2">
        <InputField
          name="companyName"
          placeholder="Company Name"
          setValue={setComapanyName}
          value={companyName}
        />
      </div>
    </div>
  );
};
