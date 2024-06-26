"use client";
import { Button } from "@/components/ui/button";
import { ReportHeader } from "./report-header";
import { OrderDetail } from "./order-detail";
import { OfficialCompanyData } from "./official-contact-data";
import { SummaryInfo } from "./summary-info";
import { ShareHolderList } from "./shareholder-list";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { Conclusion } from "@/app/share//report/conclusion";
import { CodeAndDefination } from "@/app/share//report/code-and-defination";
import { CompanyContact } from "./company-contact-info";
import { useLanguage } from "@/hooks/UseLanguage";
interface reportProps {
  report: any;
}
export const Reportpreview = ({ report }: reportProps) => {
  const [mounted, isMounded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [myreport, setmyreport] = useState(report.report);
  const {setLanguage}=useLanguage()

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Printable Document",
    onAfterPrint: () => setPageNumber(1),
  });

  const handlechangeLanguage=useCallback(()=>{
    console.log(report.report.language);
    if(report.report.language==='Franch'){
      setLanguage("FN")
    }else{
      setLanguage("EN")
    }
    
  },[report.report.language,setLanguage])
 
 useEffect(() => {
    isMounded(true);
    handlechangeLanguage()
  }, [handlechangeLanguage]);
  if (!mounted) {
    return null;
  }

 

  return (
    <div className="flex flex-col space-y-4">
      <div className="h-full" ref={componentRef}>
        <p className="font-bold text-zinc-950">Page {pageNumber}</p>
        <div
          style={{
            backgroundImage: "url(/bg.jpeg)",
            backgroundPosition: "bottom 40px right 40px, bottom 40px left 40px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "500px",
          }}
          className="flex flex-col space-y-4 text-zinc-900 bg-white  h-full lg:p-20 p-4"
        >
          <ReportHeader
            companyName={myreport.companyName}
            date={report.createdAt}
          />
          <OrderDetail report={myreport} />
          <CompanyContact report={myreport} />
          <OfficialCompanyData report={myreport} />
          <SummaryInfo report={myreport} />
          {myreport.shareholders.length > 0 && (
            <ShareHolderList shareholders={myreport.shareholders} />
          )}
          {myreport.managers.length > 0 && (
            <Managers managers={myreport.managers} />
          )}
          {myreport.nace != "" && <Activity report={myreport} />}
          {myreport.financialDatas.length > 0 && (
            <>
              <FinancialData financialdata={myreport.financialDatas} />
              <FinancailIndicator financialdata={myreport.financialDatas} />
              <FinancailIndicatorChart
                financialdata={myreport.financialDatas}
              />
            </>
          )}
          <EffectivePart effectives={myreport?.effectives} />
          {myreport.importText && <CommercialData report={myreport} />}
          {myreport.banks.length > 0 && (
            <BankAndApprecation banks={myreport.banks} />
          )}
          {myreport?.secondyestablishment && (
            <SecondaryEstablishment report={myreport} />
          )}
          {myreport.officailpublication && (
            <OfficailPublication report={myreport} />
          )}
          {myreport.conclusion && <Conclusion />}
          <CodeAndDefination />
        </div>
      </div>

      <div className="flex justify-center items-center px-8 mb-20">
        <Button size={"default"} onClick={handlePrint}>
          Download
        </Button>
      </div>
    </div>
  );
};
/* 
#ECECEC


*/
