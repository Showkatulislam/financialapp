import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface ShareHolderListProps{
  shareholders:any
}
export const ShareHolderList = ({shareholders}:ShareHolderListProps) => {
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
          {shareholders.map((s:any) => (
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
