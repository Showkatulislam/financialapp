"use client";
import { Button } from "@/components/ui/button";
import { ReportHeader } from "./report-header";
import { OrderDetail } from "./order-detail";
import { OfficialCompanyData } from "./official-contact-data";
import { SummaryInfo } from "./summary-info";
import { ShareHolderList } from "./shareholder-list";
import { useEffect, useRef, useState } from "react";
import { Managers } from "./manager-list";
import { Activity } from "./activity";
import { FinancialData } from "./financial-data";
import { FinancailIndicator } from "./financial-indicator";
import { FinancailIndicatorChart } from "./financial-indicator-chat";
import { EffectivePart } from "./effective-part";
import { CommercialData } from "./commercial-data";
import { BankAndApprecation } from "./bank-list";
import { SecondaryEstablishment } from "./secondary-establishment";
import { OfficailPublication } from "./official-publication";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import toast from "react-hot-toast";
import { Conclusion } from "./conclusion";
import { CodeAndDefination } from "./code-and-defination";
import { CompanyContact } from "./company-contact-info";
import { ReportState } from "@/hooks/ReportState";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
interface ReportpreviewProps {
  Iam: User|null;
}
export const Reportpreview = ({Iam}:ReportpreviewProps) => {
  const [mounted, isMounded] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { report,setTextField } = ReportState();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint() {
      console.log();
    },
  });
  useEffect(() => {
    isMounded(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const saveReport = async () => {
    setLoading(true);
    try {
      await axios.post("/api/report", { report: report, userId: Iam?.id });
      if (report.status === "pending") {
        await axios.patch(`/api/order/${report.id}`,{});
      }
      toast.success("report added successfullly");
    } catch (error) {
      toast.error("Report not add at Database");
    } finally {
      setTextField({ client: '' });
      setTextField({ priority: '' });
      setTextField({ companyName: '' });
      setTextField({ status: '' });
      setTextField({ id: '' });
      router.refresh();
      router.push("/report-list");
      setLoading(false);
    }
  };
  return (
    <div>
      <div ref={componentRef}>
        <div className="flex flex-col space-y-4 text-zinc-900 bg-white   lg:p-20 h-[550px] overflow-y-scroll overflow-x-hidden">
          <ReportHeader />
          <OrderDetail />
          <CompanyContact />
          <OfficialCompanyData />
          <SummaryInfo />
          <ShareHolderList />
          <Managers />
          <Activity />
          <FinancialData />
          <FinancailIndicator />
          <FinancailIndicatorChart />
          <EffectivePart />
          <CommercialData />
          <BankAndApprecation />
          <SecondaryEstablishment />
          <OfficailPublication />
          <Conclusion />
          <CodeAndDefination />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          className="my-3 bg-indigo-500 hover:bg-indigo-400 text-2xl font-bold text-white p-1"
          size="lg"
          onClick={handlePrint}
        >
          Preview
        </Button>
        <Button
          className="my-3 bg-sky-500 hover:bg-sky-400 text-2xl font-bold text-white p-1 ml-10"
          size="lg"
          onClick={saveReport}
        >
          {loading ? "Saving report" : "Save"}
        </Button>
      </div>
    </div>
  );
};
