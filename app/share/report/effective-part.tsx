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

export const EffectivePart = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title={dic.effective[index]} />
      <div>
        <Table>
          <TableBody>
            {report.effectives.map((e) => (
              <TableRow className="border-none" key={e.id}>
                <TableCell>{e.year}</TableCell>
                <TableCell>{e.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
