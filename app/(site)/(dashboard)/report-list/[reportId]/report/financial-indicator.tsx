import ReportTitle from "@/app/share//report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { dic } from "@/dictionaries";
import { financialdata } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface FinancailIndicatorprops {
  financialdata: financialdata[];
}
export const FinancailIndicator = ({
  financialdata,
}: FinancailIndicatorprops) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle
        title={dic.financialIndicator[index]}
      />
      <div>
        <Table>
          <TableBody>
            <TableRow className=" border-none">
              <TableCell></TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.year}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.netProfitability[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.turnover).toFixed(3)} %
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>{dic.roeReturnOnEquity[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.equityballocation).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.roaReturnOnAsset[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.total).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>{dic.autonomyFinancial[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.equityballocation / f.total).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.ebitada[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.oprofit / f.damorliztion).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>{dic.leadTimeSuppliers[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.supplieraccounts / (f.purchases * 360)).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.customerLeadTime[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.clientaccounts / (f.turnover * 360)).toFixed(3)}%
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
