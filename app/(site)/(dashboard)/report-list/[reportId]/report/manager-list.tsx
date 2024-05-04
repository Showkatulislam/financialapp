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
import { ReportState, manager } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { cn } from "@/lib/utils";
interface managerProps {
  managers: manager[];
}
export const Managers = ({ managers }: managerProps) => {
  const { LAN } = useLanguage();
  const index = LAN == "EN" ? 0 : 1;
  const { report } = ReportState();
  return (
    <div>
      <ReportTitle title={dic.Managers[index]} />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-bold">
            {dic.ManagerName[index]}
          </TableHead>
          <TableHead className="text-blue-600 font-bold">
            {dic.companyName[index]}
          </TableHead>
          <TableHead className="text-blue-600 font-bold">
            {dic.Function[index]}
          </TableHead>
          <TableHead className="text-blue-600 font-bold">
            {dic.Nationality[index]}
          </TableHead>
        </TableHeader>
        <TableBody>
          {managers?.map((m: any, i) => (
            <TableRow
              key={m.id}
              className={cn("border-none", i % 2 == 0 ? "bg-[#ECECEC]" : "")}
            >
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.companyName}</TableCell>
              <TableCell>{m.function}</TableCell>
              <TableCell>{m.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {report.managercmd && <p className="font-normal">{report.managercmd}</p>}
    </div>
  );
};
