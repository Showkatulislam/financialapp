import { Reportpreview } from "@/app/components/report/report-preview";
import { Reportform } from "./components/report-form";
import { GetClient } from "@/app/actions/get-client";

const page =async () => {
  const clients=await GetClient()
  return (
    <div className="h-full flex">
      <div className="w-1/2 overflow-y-auto">
        <Reportform clients={clients}/>
      </div>
      <div className="w-1/2 overflow-y-auto overflow-x-hidden">
        <Reportpreview />
      </div>
    </div>
  );
};

export default page;
