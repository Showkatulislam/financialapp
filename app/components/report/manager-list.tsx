import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReportStore } from "@/hooks/useReportStore";
export const Managers = () => {
  const {managers}=useReportStore()
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
        {
          managers.map(m=>(
            <TableRow key={m.id} className="border-none">
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.companyName}</TableCell>
              <TableCell>{m.function}</TableCell>
              <TableCell>{m.nationality}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </div>
  );
};
