"use client";
import { OfficialCompanyData } from "./official-company-data";
import { OrderDetail } from "./order-details";
import { ShareHolder } from "./shareholder";
import { SummaryInfo } from "./summary-info";
import { ReportTable } from "./report-table";
import { Manager } from "./manager";
import { FinancialData } from "./Financial-data";
import CommercialData from "./commercial-data";
import { BankInfo } from "./bank-inputs";
import { ActivityInput } from "./activity-input";
import { ExtraInfo } from "./extra-info";
import { Client } from "@prisma/client";
import { CompanyName } from "./companyName";
import { CompanyContactInfo } from "./company-contact-info";
import Container from "@/app/components/Container";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
import FinancialTable from "./FinancialTable";
import { ReportState } from "@/hooks/ReportState";
import { usePathname } from "next/navigation";
import { EffectivePart } from "./Effective-part";
import { EffectiveTable } from "./EffectiveTable";
interface reportProps {
  clients: Client[];
}
export const Reportform = ({ clients }: reportProps) => {
  const {
    report,
    deleteShareholder,
    editShareholder,
    deleteManager,
    editManager,
    deleteFinancialData,
    editFinancialData,
    deleteBank,
    editBank,
  } = ReportState();
  const path = usePathname();
  return (
    <>
      {!path.includes("report-list") && (
        <Link
          className="pl-5 rounded-sm border my-4 flex gap-x-4 w-24 items-center"
          href={"/dashboard"}
        >
          <ArrowLeftCircle />
          Back
        </Link>
      )}

      <Container title="Create Report">
        <div className="grid gird-col-12 gap-4 ">
          <CompanyName />
          <OrderDetail clients={clients} />
          <CompanyContactInfo />
          <OfficialCompanyData />
          <SummaryInfo />
          <div className="col-span-12 border p-2 space-y-2">
            <ReportTable
              title="shareholder list"
              cols={["name", "percentage", "nationality"]}
              rows={report.shareholders}
              deleteFun={deleteShareholder}
              editFun={editShareholder}
            />
            <ShareHolder />
          </div>
          <div className="col-span-12 border p-2 space-y-2">
            <ReportTable
              title="Manager list"
              cols={["name", "companyName", "function", "nationality"]}
              rows={report.managers}
              deleteFun={deleteManager}
              editFun={editManager}
            />
            <Manager />
            <ActivityInput />
          </div>
          {report.financialDatas.length > 0 && (
            <FinancialTable
              title="financial list"
              rows={report.financialDatas}
              deleteFun={deleteFinancialData}
              editFun={editFinancialData}
            />
          )}
          <FinancialData />
          <EffectiveTable />
          <EffectivePart />
          <CommercialData />
          <ReportTable
            title="bank list"
            cols={["bank", "agency"]}
            rows={report.banks}
            deleteFun={deleteBank}
            editFun={editBank}
          />
          <BankInfo />
          <ExtraInfo />
        </div>
      </Container>
    </>
  );
};
