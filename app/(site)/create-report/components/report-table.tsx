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
  title:string
  deleteFun:(id:string)=>void
}

export const ReportTable = ({ cols, rows,title,deleteFun }: ReportTableProps) => {
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
        </TableHeader>
        <TableBody>
          {rows.map((r: any) => (
            <TableRow key={r.id}>
              {cols.map((e) => {
                return <TableCell key={e}>{r[e]}</TableCell>;
              })}
              <TableCell onClick={()=>deleteFun(r.id)}>
                <Trash/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
