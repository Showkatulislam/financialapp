import InputField from "@/app/components/inputs/InputFields";
import { useReportStore } from "@/hooks/useReportStore";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export const CompanyName = () => {
  const { setComapanyName, companyName } = useReportStore();
  return (
    <div className="col-span-12">
      <Link
        className="p-1 rounded-sm border my-4 flex gap-x-4 w-24 items-center"
        href={"/dashboard"}
      >
        <ArrowLeftCircle />
        Back
      </Link>
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
