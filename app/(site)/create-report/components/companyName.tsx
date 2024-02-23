import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

export const CompanyName = () => {
  const { setcompanyinfo, companydetail } = useReportStore();
  return (
    <div className="col-span-12">
       <Link className="p-1 rounded-sm my-4 flex gap-x-4 w-24  bg-sky-500 items-center" href={"/dashboard"}>
            <ArrowLeftCircle/>
            Back
       </Link>
      <InputField
        name="companyName"
        placeholder="Company Name"
        setValue={setcompanyinfo}
        value={companydetail.companyName}
      />
    </div>
  );
};
