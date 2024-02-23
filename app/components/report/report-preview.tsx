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
import { useReportStore } from "@/hooks/useReportStore";
import axios from "axios";
import toast from "react-hot-toast";
import { Conclusion } from "./conclusion";
import { CodeAndDefination } from "./code-and-defination";
export const Reportpreview = () => {
  const [mounted, isMounded] = useState(false);
  const {
    orderdetail,
    officaldata,
    summeryinfo,
    shareholders,
    managers,
    financialdata,
    commercialdata,
    banks,
    extrainfo
  } = useReportStore();
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
    const mydata = {
      orderdetail,
      officaldata,
      summeryinfo,
      shareholders,
      managers,
      financialdata,
      commercialdata,
      banks,
      extrainfo
    };
    const report=await axios.post('/api/report',{mydata})
    console.log(report);   
    toast.success("report added successfullly")
  };
  return (
    <div>
      <div ref={componentRef}>
        <div className="flex flex-col space-y-4 text-zinc-900 bg-white  h-full lg:p-20 p-4">
          <ReportHeader />
          <OrderDetail />
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
          <Conclusion/>
          <CodeAndDefination/>
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
          Save
        </Button>
      </div>
    </div>
  );
};
