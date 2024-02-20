import ReportTitle from "@/app/components/report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useReportStore } from "@/hooks/useReportStore";
interface CommercialDataprops {
  commercialdata: any;
}
export const CommercialData = ({ commercialdata }: CommercialDataprops) => {
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
