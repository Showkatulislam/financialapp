import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReportTitle from "../report-title";
import { useReportStore } from "@/hooks/useReportStore";

export const BankAndApprecation = () => {
  const { banks } = useReportStore();
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="BANKS AND BANK APPRECIATION" />
      <div>
        <Table>
          <TableHeader>
            <TableHead className="text-blue-800">Bank</TableHead>
            <TableHead className="text-blue-800">Agency</TableHead>
            <TableHead className="text-blue-800">comment</TableHead>
          </TableHeader>
          <TableBody>
            {banks.map((b) => (
              <TableRow key={b.id}>
                <TableCell>{b.bank}</TableCell>
                <TableCell>{b.agency}</TableCell>
                <TableCell>{b.comment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
