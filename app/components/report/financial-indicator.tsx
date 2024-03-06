import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";
export const FinancailIndicator = () => {
  const {
    report: { financialDatas },
  } = ReportState();
  return (
    <div>
      <ReportTitle
        title="FINANCIAL INDICATORS
  "
      />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none">
              <TableCell></TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.year}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Net profitability</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.turnover).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>ROE Return On Equity</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.equityballocation).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>ROA Return On Asset</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Autonomy Financial</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.equityballocation / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>EBITDA</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.oprofit / f.damorliztion).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Lead time Suppliers</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.supplieraccounts / (f.purchases * 360)).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Customer lead time</TableCell>
              {financialDatas.map((f) => (
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
