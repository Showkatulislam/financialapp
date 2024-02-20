import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { useReportStore } from "@/hooks/useReportStore";
export const FinancialData = () => {
  const {financialdata}=useReportStore()
  return (
    <div className="col-span-12">
      <ReportTitle title="FINANCIAL DATA (EXPRESSED IN TND)" />
      <div>
      <Table>
          <TableBody>
            <TableRow className="border-none font-semibold">
              <TableCell>year</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.year.substring(0,4)}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Turnover</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.turnover}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Operating profit</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.oprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Dowry. to amortization</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.damorliztion}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Equity before allocation</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.equityballocation}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Suppliers and Linked Account</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Consumed purchases</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.purchases}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Clients and associated accounts</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.clientaccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Stocks</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.stocks}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none font-semibold">
              <TableCell>Balance sheet total</TableCell>
              {financialdata.map((f) => (
                <TableCell key={f.id}>{f.total}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
