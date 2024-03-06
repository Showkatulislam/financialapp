import Title from "@/components/Title";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { ReportState } from "@/hooks/ReportState";
import { Edit, Trash } from "lucide-react";
export const EffectiveTable = () => {
  const { report, deleteEffective, editEffective } = ReportState();
  return (
    <div className="col-span-12 border overflow-x-auto">
      <Title title={"Effective Data"} />
      <Table>
        {report?.effectives?.map((e: any) => (
          <TableRow key={e.id} className="border">
            <TableCell>{e.year}</TableCell>
            <TableCell>{e.count}</TableCell>
            <TableCell>
              <Trash onClick={() => deleteEffective(e.id)} />
            </TableCell>
            <TableCell>
              <Edit onClick={() => editEffective(e.id)} />
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};
