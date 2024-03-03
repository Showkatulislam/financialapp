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
import { usePathname } from "next/navigation";
import { Conclusion } from "@/app/components/report/conclusion";
import { CodeAndDefination } from "@/app/components/report/code-and-defination";
import { CompanyContact } from "./company-contact-info";
interface reportProps {
  report: Report | any;
}
export const Reportpreview = ({ report }: reportProps) => {
  const [mounted, isMounded] = useState(false);
  const [myreport, setmyreport] = useState(report.report);
  const componentRef = useRef(null);
  const path = usePathname();
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

  return (
    <div>
      <div className="h-full" ref={componentRef}>
        <div className="flex flex-col space-y-4 text-zinc-900 bg-white  h-full lg:p-20 p-4">
          <ReportHeader companyName={myreport.companyName} />
          <OrderDetail orderdetail={myreport.orderdetail} />
          <CompanyContact companydetail={myreport.companydetail}/>
          <OfficialCompanyData officaldata={myreport.officaldata} />
          <SummaryInfo summeryinfo={myreport.summeryinfo} />
          <ShareHolderList shareholders={myreport.shareholders} />
          <Managers managers={myreport.managers} />
          <Activity extrainfo={myreport.extrainfo} />
          <FinancialData financialdata={myreport.financialdata} />
          <FinancailIndicator financialdata={myreport.financialdata} />
          <FinancailIndicatorChart financialdata={myreport.financialdata} />
          <EffectivePart />
          <CommercialData commercialdata={myreport.commercialdata} />
          <BankAndApprecation banks={myreport.banks} />
          <SecondaryEstablishment extrainfo={myreport.extrainfo} />
          <OfficailPublication />
          <Conclusion/>
          <CodeAndDefination/>
        </div>
      </div>
      {path.includes("report-list/") && (
        <div className="flex justify-center items-center px-8 mb-20">
          <Button
           size={"lg"}
            onClick={handlePrint}
          >
            Preview
          </Button>
        </div>
      )}
    </div>
  );
};
