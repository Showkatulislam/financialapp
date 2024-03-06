import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";
import { useEffect, useState } from "react";
export const FinancialData = () => {
  const [mounted, isMounded] = useState(false);
  const {
    report: { financialDatas },
  } = ReportState();
  useEffect(() => {
    isMounded(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="col-span-12">
      <ReportTitle title="FINANCIAL DATA (EXPRESSED IN TND)" />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none">
              <TableCell>year</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.year}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Turnover</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.turnover}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Operating profit</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.oprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Net profit</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.nprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Dowry. to amortization</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.damorliztion}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Equity before allocation</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.equityballocation}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Suppliers and Linked Account</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Consumed purchases</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.purchases}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Clients and associated accounts</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.clientaccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Stocks</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.stocks}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Balance sheet total</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.total}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
