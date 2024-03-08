import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReportState, bank } from "@/hooks/ReportState";
import { cn } from "@/lib/utils";
interface BankAndApprecationprops {
  banks: bank[];
}
export const BankAndApprecation = ({ banks }: BankAndApprecationprops) => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="BANKS AND BANK APPRECIATION" />
      <div>
        <Table>
          <TableHeader>
            <TableHead className="text-blue-800">Bank</TableHead>
            <TableHead className="text-blue-800">Agency</TableHead>
          </TableHeader>
          <TableBody>
            {banks?.map((b: any, i) => (
              <TableRow
                key={b.id}
                className={cn("border-none", i % 2 == 0 && "bg-[#ECECEC]")}
              >
                <TableCell>{b.bank}</TableCell>
                <TableCell>{b.agency}</TableCell>
              </TableRow>
            ))}
            <TableRow
              key={10}
              className={cn(
                "border-none"
              )}
            >
              <TableCell>
              <span className="font-bold">Comment</span>
              </TableCell>
              <TableCell>{report.bankComment}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
