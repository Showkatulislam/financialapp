import ReportTitle from "@/app/share//report-title";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { dic } from "@/dictionaries";
import { report } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
interface CommercialDataprops {
  report: report;
}
export const CommercialData = ({ report }: CommercialDataprops) => {
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
          <TableRow className="border-none bg-[#ECECEC]">
            <TableCell>{dic.suppliersLocal[index]}</TableCell>
            <TableCell>{report.suppliersLocal}</TableCell>
          </TableRow>
          <TableRow className="border-none">
            <TableCell>{dic.export[index]}</TableCell>
            <TableCell>{report.exportText}</TableCell>
          </TableRow>
          <TableRow className="border-none bg-[#ECECEC]">
            <TableCell>{dic.clientsLocal[index]}</TableCell>
            <TableCell>{report.clientsLocal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
