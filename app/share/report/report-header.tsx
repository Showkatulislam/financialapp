import Image from "next/image";
import img from "@/public/logo.svg";
import { ReportState } from "@/hooks/ReportState";
export const ReportHeader = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <Image src={img} alt="logo" />
        </div>

        <div className="flex flex-col lg:space-y-2 space-y-1 lg:text-base text-sm text-right font-normal">
          <p>© Finance Go</p>
          <p>Renseignement commercial et Analyse financière</p>
          <p>email: max@financego.co.uk</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold lg:text-2xl text-xl">Financial Report</h1>
        <h2 className="lg:text-xl font-normal text-base">
          {report.companyName}
        </h2>
      </div>
    </div>
  );
};
