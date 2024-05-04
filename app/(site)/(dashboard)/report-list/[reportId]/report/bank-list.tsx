import ReportTitle from "@/app/share//report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dic } from "@/dictionaries";
import { ReportState, bank } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { cn } from "@/lib/utils";
interface BankAndApprecationprops {
  banks: bank[];
}
export const BankAndApprecation = ({ banks }: BankAndApprecationprops) => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
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
              <span className="font-bold">
              {dic.comment[index]}
              </span>
              </TableCell>
              <TableCell>{report.bankComment}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
