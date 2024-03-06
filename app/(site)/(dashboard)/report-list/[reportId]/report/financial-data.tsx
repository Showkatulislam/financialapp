import ReportTitle from "@/app/components/report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { financialdata } from "@/hooks/ReportState";
interface financialProps {
  financialdata: financialdata[];
}
export const FinancialData = ({ financialdata }: financialProps) => {
  return (
    <div className="col-span-12">
      <ReportTitle title="FINANCIAL DATA (EXPRESSED IN TND)" />
      <div>
        <Table>
          <TableBody>
            <TableRow className="border-none">
              <TableCell>year</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.year.substring(0, 4)}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Turnover</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.turnover}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Operating profit</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.oprofit}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Dowry. to amortization</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.damorliztion}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Equity before allocation</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.equityballocation}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Suppliers and Linked Account</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Consumed purchases</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.purchases}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Clients and associated accounts</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.clientaccounts}</TableCell>
              ))}
            </TableRow>
            <TableRow className="border-none">
              <TableCell>Stocks</TableCell>
              {financialdata?.map((f: any) => (
                <TableCell key={f.id}>{f.stocks}</TableCell>
              ))}
            </TableRow>
            <TableRow className="bg-[#ECECEC] border-none">
              <TableCell>Balance sheet total</TableCell>
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
