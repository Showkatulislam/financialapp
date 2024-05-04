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
import { shareholder } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { cn } from "@/lib/utils";
interface ShareHolderListProps {
  shareholders: shareholder[];
}
export const ShareHolderList = ({ shareholders }: ShareHolderListProps) => {
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={`${dic.ShareHolders[index]} /ASSOCIATES`}/>
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-normal">{dic.ShareHolderName[index]}</TableHead>
          <TableHead className="text-blue-600 font-normal">
          {dic.percentage[index]}
          </TableHead>
          <TableHead className="text-blue-600 font-normal">
          {dic.nationality[index]}
          </TableHead>
        </TableHeader>
        <TableBody>
          {shareholders?.map((s: any, i) => (
            <TableRow
              key={s.id}
              className={cn('border-none',i % 2 == 0 ? "bg-[#ECECEC]" : "")}
            >
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.percentage}</TableCell>
              <TableCell>{s.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
