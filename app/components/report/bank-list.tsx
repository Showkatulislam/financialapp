import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ReportTitle from "../report-title";
import { ReportState } from "@/hooks/ReportState";

export const BankAndApprecation = () => {
  const {
    report: { banks,bankComment },
  } = ReportState();
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
            {banks.map((b) => (
              <TableRow key={b.id}>
                <TableCell>{b.bank}</TableCell>
                <TableCell>{b.agency}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                commment
              </TableCell>
              <TableCell>
                {bankComment}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
