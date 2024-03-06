import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { manager } from "@/hooks/ReportState";
import { cn } from "@/lib/utils";
interface managerProps {
  managers: manager[];
}
export const Managers = ({ managers }: managerProps) => {
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
          {managers?.map((m: any, i) => (
            <TableRow
              key={m.id}
              className={cn(i % 2 == 0 ? "bg-[#ECECEC]" : "")}
            >
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
