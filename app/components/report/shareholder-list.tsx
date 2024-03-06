import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReportState } from "@/hooks/ReportState";
export const ShareHolderList = () => {
  const { report } = ReportState();
  return (
    <div>
      <ReportTitle title="SHAREHOLDERS/ASSOCIATES" />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-normal">Name</TableHead>
          <TableHead className="text-blue-600 font-normal">
            Percentage
          </TableHead>
          <TableHead className="text-blue-600 font-normal">
            Nationality
          </TableHead>
        </TableHeader>
        <TableBody>
          {report.shareholders.map((s) => (
            <TableRow key={s.id} className="border-none">
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.percentage}</TableCell>
              <TableCell>{s.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
