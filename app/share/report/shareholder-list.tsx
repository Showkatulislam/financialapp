import ReportTitle from "@/app/share//report-title";
import { CL } from "@/app/utils/change-language";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
export const ShareHolderList = () => {
  const { report } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div>
      <ReportTitle title={`${dic.ShareHolders[index]}`} />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-normal">{CL("ShareHolderName")}</TableHead>
          <TableHead className="text-blue-600 font-normal">
            {CL("percentage")}
          </TableHead>
          <TableHead className="text-blue-600 font-normal">
            {CL("nationality")}
          </TableHead>
        </TableHeader>
        <TableBody>
          {report.shareholders.map((s) => (
            <TableRow key={s.id} className="border-none">
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.percentage} %</TableCell>
              <TableCell>{s.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        report.shareholdercmd && <p className="font-normal">{report.shareholdercmd}</p>
      }
    </div>
  );
};
