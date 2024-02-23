import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { useReportStore } from "@/hooks/useReportStore";
export const FinancailIndicator = () => {
  const { financialdata } = useReportStore();
  return (
    <div>
      <ReportTitle
        title="FINANCIAL INDICATORS
  "
      />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none font-semibold">
              <TableCell></TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {f.year}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Net profitability</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.turnover).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>ROE Return On Equity</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.equityballocation).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>ROA Return On Asset</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Autonomy Financial</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.equityballocation / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>EBITDA</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.oprofit / f.damorliztion).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Lead time Suppliers</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>
                  {(f.supplieraccounts / (f.purchases * 360)).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Customer lead time</TableCell>
              {financialdata.map((f) => (
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
