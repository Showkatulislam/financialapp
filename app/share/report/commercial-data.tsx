import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { dic } from "@/dictionaries";

export const CommercialData = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={dic.commercialDataTitle[index]} />
      <Table>
        <TableBody className="font-normal">
          <TableRow className="border-none">
            <TableCell>{dic.Import[index]}</TableCell>
            <TableCell>{report.importText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>{dic.suppliersLocal[index]}</TableCell>
            <TableCell>{report.suppliersLocal}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>{dic.export[index]}</TableCell>
            <TableCell>{report.exportText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>{dic.clientsLocal[index]}</TableCell>
            <TableCell>{report.clientsLocal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
