import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import ReportTitle from "../report-title";
import { useReportStore } from "@/hooks/useReportStore";

export const CommercialData = () => {
  const { commercialdata } = useReportStore();
  return (
    <div>
      <ReportTitle title="COMMERCIAL DATA" />
      <Table>
        <TableBody className="font-normal">
          <TableRow className="border-none">
            <TableCell>Import</TableCell>
            <TableCell>{commercialdata.importText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Suppliers Local</TableCell>
            <TableCell>{commercialdata.suppliersLocal}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Export</TableCell>
            <TableCell>{commercialdata.exportText}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>Clients Local</TableCell>
            <TableCell>{commercialdata.clientsLocal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
