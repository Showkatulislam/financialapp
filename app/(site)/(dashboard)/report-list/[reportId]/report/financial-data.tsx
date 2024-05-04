import ReportTitle from "@/app/share//report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { dic } from "@/dictionaries";
import { financialdata } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface financialProps {
  financialdata: financialdata[];
}
export const FinancialData = ({ financialdata }: financialProps) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="col-span-12">
      <ReportTitle title={dic.FinancialData[index]} />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none">
              <TableCell>{dic.Year[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.year.substring(0, 4)}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.Turnover[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.turnover}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.Oprofit[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.oprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.denomination[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.damorliztion}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.equityballocation[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.equityballocation}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.supplieraccounts[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.purchases[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.purchases}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.clientaccounts[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.clientaccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>{dic.stocks[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.stocks}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>{dic.total[index]}</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.total}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
