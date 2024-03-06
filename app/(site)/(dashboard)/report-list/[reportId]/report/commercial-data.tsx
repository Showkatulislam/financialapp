import ReportTitle from "@/app/components/report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { report } from "@/hooks/ReportState";
interface CommercialDataprops {
  report: report;
}
export const CommercialData = ({ report }: CommercialDataprops) => {
  return (
    <div>
      <ReportTitle title="COMMERCIAL DATA" />
      <Table>
        <TableBody className="font-normal">
          <TableRow className="border-none">
            <TableCell>Import</TableCell>
            <TableCell>{report.importText}</TableCell>
          </TableRow>
          <TableRow className="border-none bg-[#ECECEC]">
            <TableCell>Suppliers Local</TableCell>
            <TableCell>{report.suppliersLocal}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Export</TableCell>
            <TableCell>{report.exportText}</TableCell>
          </TableRow>
          <TableRow className="border-none bg-[#ECECEC]">
            <TableCell>Clients Local</TableCell>
            <TableCell>{report.clientsLocal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
