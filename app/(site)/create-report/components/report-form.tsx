"use client";
import { OfficialCompanyData } from "./official-company-data";
import { OrderDetail } from "./order-details";
import { ShareHolder } from "./shareholder";
import { SummaryInfo } from "./summary-info";
import { ReportTable } from "./report-table";
import { useReportStore } from "@/hooks/useReportStore";
import { Manager } from "./manager";
import { FinancialData } from "./Financial-data";
import CommercialData from "./commercial-data";
import { BankInfo } from "./bank-inputs";
import { ActivityInput } from "./activity-input";
import { ExtraInfo } from "./extra-info";
import { Client } from "@prisma/client";
import { CompanyName } from "./companyName";
interface reportProps{
  clients:Client[]
}
export const Reportform = ({clients}:reportProps) => {
  const { shareholders, managers, financialdata,banks,DeleteShareholder,DeleteManager,DeleteFinancialData,DeleteBank} = useReportStore();
  return (
    <div className="grid gird-col-12 gap-4 p-5">
      <CompanyName/>
      <OrderDetail clients={clients}/>
      <OfficialCompanyData />
      <SummaryInfo />
      <div className="col-span-12 border p-2 space-y-2">
      <ReportTable
        title="shareholder list"
        cols={["name", "percentage", "nationality"]}
        rows={shareholders}
        deleteFun={DeleteShareholder}
      />
      <ShareHolder />
      </div>
      <div className="col-span-12 border p-2 space-y-2">
      <ReportTable
        title="Manager list"
        cols={["name", "companyName", "function", "nationality"]}
        rows={managers}
        deleteFun={DeleteManager}
      />
      <Manager />
      <ActivityInput/>
      </div>
      <ReportTable
        title="financial list"
        cols={[
          "year",
          "turnover",
          "nprofit",
          "oprofit",
          "damorliztion",
          "equityballocation",
          "supplieraccounts",
          "purchases",
          "clientaccounts",
          "stocks",
          "total",
        ]}
        rows={financialdata}
        deleteFun={DeleteFinancialData}
      />
      <FinancialData />
      <CommercialData/>
      <ReportTable
        title="bank list"
        cols={[
          'bank',
          'agency',
          'comment',
        ]}
        rows={banks}
        deleteFun={DeleteBank}
      />
      <BankInfo/>
      <ExtraInfo/>
    </div>
  );
};
