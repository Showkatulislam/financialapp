import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";
export const FinancailIndicator = () => {
  const {
    report: { financialDatas },
  } = ReportState();
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
            <TableRow className="border-none">
              <TableCell></TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>{f.year}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.netProfitability[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.turnover).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.roeReturnOnEquity[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.equityballocation).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.roaReturnOnAsset}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.nprofit / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.autonomyFinancial[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.equityballocation / f.total).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.ebitada[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.oprofit / f.damorliztion).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.leadTimeSuppliers[index]}</TableCell>
              {financialDatas.map((f) => (
                <TableCell key={f.id}>
                  {(f.supplieraccounts / (f.purchases * 360)).toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.customerLeadTime[index]}</TableCell>
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
