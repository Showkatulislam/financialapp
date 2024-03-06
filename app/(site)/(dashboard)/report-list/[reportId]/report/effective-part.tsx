import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {  effective } from "@/hooks/ReportState";
import { cn } from "@/lib/utils";
interface Effectiveprops {
  effectives: effective[];
}
export const EffectivePart = ({effectives}:Effectiveprops) => {
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title="EFFECTIVE" />
      <div>
        <Table>
          <TableBody>
            {effectives?.map((e, i) => (
              <TableRow
                key={e.id}
                className={cn(i % 2 == 2 && "bg-[#ECECEC]", "border-none")}
              >
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
