import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface ReportTableProps {
  cols: string[];
  rows: {}[];
  title: string;
  deleteFun: (id: string) => void;
  editFun: (id: string) => void;
}

export const ReportTable = ({
  cols,
  rows,
  title,
  deleteFun,
  editFun,
}: ReportTableProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="col-span-12 border overflow-x-auto">
      <Title title={title} />
      <Table>
        <TableHeader>
          {cols.map((e) => (
            <TableHead key={e}>{e}</TableHead>
          ))}
          <TableHead>Delete</TableHead>
          <TableHead>Edit</TableHead>
        </TableHeader>
        <TableBody>
          {rows.map((r: any) => (
            <TableRow key={r.id}>
              {cols.map((e) => {
                return <TableCell key={e}>{r[e]}</TableCell>;
              })}
              <TableCell>
                <Trash className="w-5 h-5" onClick={() => deleteFun(r.id)} />
              </TableCell>
              <TableCell>
                <Edit className="w-5 h-5" onClick={() => editFun(r.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
