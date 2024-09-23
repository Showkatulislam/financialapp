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
import { ReportState } from "@/hooks/ReportState";
export const Managers = () => {
  const {
    report: { managers,managercmd },
    
  } = ReportState();
  return (
    <div>
      <ReportTitle title={CL("Managers")} />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-bold">{CL("ManagerName")}</TableHead>
          <TableHead className="text-blue-600 font-bold">{CL("Function")}</TableHead>
          <TableHead className="text-blue-600 font-bold">{CL("Nationality")}</TableHead>
        </TableHeader>
        <TableBody>
          {managers.map((m) => (
            <TableRow key={m.id}>
              <TableCell>{m.name}</TableCell>
              <TableCell>{m.function}</TableCell>
              <TableCell>{m.nationality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        managercmd && <p className="font-normal">{managercmd}</p>
      }
    </div>
  );
};
