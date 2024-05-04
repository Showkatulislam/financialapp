import ReportTitle from "@/app/share//report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { dic } from "@/dictionaries";
import {  effective } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { cn } from "@/lib/utils";
interface Effectiveprops {
  effectives: effective[];
}
export const EffectivePart = ({effectives}:Effectiveprops) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col space-y-2">
      <ReportTitle title={dic.effective[index]} />
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
