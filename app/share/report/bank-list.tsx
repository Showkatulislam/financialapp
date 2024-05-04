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
import { dic } from "@/dictionaries";
import { useLanguage } from "@/hooks/UseLanguage";

export const BankAndApprecation = () => {
  const {
    report: { banks, bankComment },
  } = ReportState();
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title={dic.bankandapprociation[index]} />
      <div>
        <Table>
          <TableHeader>
            <TableHead className="text-blue-800">{dic.bank[index]}</TableHead>
            <TableHead className="text-blue-800">{dic.agency[index]}</TableHead>
          </TableHeader>
          <TableBody>
            {banks.map((b) => (
              <TableRow key={b.id}>
                <TableCell>{b.bank}</TableCell>
                <TableCell>{b.agency}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>{dic.comment[index]}</TableCell>
              <TableCell>{bankComment}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
