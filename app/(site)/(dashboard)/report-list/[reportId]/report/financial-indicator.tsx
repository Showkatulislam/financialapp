import ReportTitle from "@/app/components/report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { financialdata } from "@/hooks/ReportState";
interface FinancailIndicatorprops {
  financialdata: financialdata[];
}
export const FinancailIndicator = ({
  financialdata,
}: FinancailIndicatorprops) => {
  return (
    <div>
      <ReportTitle
        title="FINANCIAL INDICATORS
  "
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
              <TableCell>Net profitability</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.turnover).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>ROE Return On Equity</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.equityballocation).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>ROA Return On Asset</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>Autonomy Financial</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.equityballocation / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>EBITDA</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.oprofit / f.damorliztion).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className=" border-none">
              <TableCell>Lead time Suppliers</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.supplieraccounts / (f.purchases * 360)).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Customer lead time</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>
                  {(f.clientaccounts / (f.turnover * 360)).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
