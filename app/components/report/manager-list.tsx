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
export const Managers = () => {
  const {
    report: { managers },
  } = ReportState();
  return (
    <div>
      <ReportTitle title="MANAGERS" />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-bold">Name</TableHead>
          <TableHead className="text-blue-600 font-bold">
            Company Name
          </TableHead>
          <TableHead className="text-blue-600 font-bold">Function</TableHead>
          <TableHead className="text-blue-600 font-bold">Nationality</TableHead>
        </TableHeader>
        <TableBody>
          {managers.map((m) => (
            <TableRow key={m.id}>
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.companyName}</TableCell>
              <TableCell>{m.function}</TableCell>
              <TableCell>{m.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
