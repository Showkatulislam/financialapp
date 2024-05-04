import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";
export const FinancialData = () => {
  const [mounted, isMounded] = useState(false);
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
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
      <ReportTitle title={`${dic.FinancialData[index]}`}/>
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none">
              <TableCell> {`${dic.Year[index]}`}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.year}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell> {`${dic.Turnover[index]}`}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.turnover}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell> {dic.Oprofit[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.oprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.NetProfit[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.nprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.damorliztion[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.damorliztion}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.equityballocation[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.equityballocation}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.supplieraccounts[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.purchases[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.purchases}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.clientaccounts[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.clientaccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.stocks[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.stocks}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.total[index]}</TableCell>
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
