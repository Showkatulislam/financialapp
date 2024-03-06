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

export const EffectivePart = () => {
  const { report } = ReportState();
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="EFFECTIVE" />
      <div>
        <Table>
          <TableBody>
            {report.effectives.map((e) => (
              <TableRow className="border" key={e.id}>
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
