import { Report } from "@prisma/client";
import { Reportpreview } from "./report/report-preview";

interface reportProps {
  report: Report | null;
}
export const ShowReport = ({ report }: reportProps) => {
  return (
    <div>
      <Reportpreview report={report}/>
    </div>
  );
};
