import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shareholder } from "@/hooks/ReportState";
import { cn } from "@/lib/utils";
interface ShareHolderListProps {
  shareholders: shareholder[];
}
export const ShareHolderList = ({ shareholders }: ShareHolderListProps) => {
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
          {shareholders?.map((s: any, i) => (
            <TableRow
              key={s.id}
              className={cn(i % 2 == 0 ? "bg-[#ECECEC]" : "")}
            >
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
