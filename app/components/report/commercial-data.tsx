import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";

export const CommercialData = () => {
  const { report } = ReportState();
  return (
    <div>
      <ReportTitle title="COMMERCIAL DATA" />
      <Table>
        <TableBody className="font-normal">
          <TableRow className="border-none">
            <TableCell>Import</TableCell>
            <TableCell>{report.importText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Suppliers Local</TableCell>
            <TableCell>{report.suppliersLocal}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Export</TableCell>
            <TableCell>{report.exportText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Clients Local</TableCell>
            <TableCell>{report.clientsLocal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
