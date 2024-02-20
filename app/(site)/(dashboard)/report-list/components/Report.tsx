"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useModal } from "@/hooks/modeStore";
import { Eye, Share2, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface reportProps {
  report: any;
}
const Report = ({ report }: reportProps) => {
  const [reports, setReport] = useState(report);
  const [client, setClient] = useState(false);
  const { onOpen } = useModal();
  useEffect(() => {
    setClient(true);
  }, []);
  if (!client) {
    return null;
  }
  const handleDelete = async (id: string) => {
    toast.success("Report Delete Successfully.");
  };
  return (
    <div className="mx-5 my-5 border">
      <Table>
        <TableHeader>
          <TableHead>Id</TableHead>
          <TableHead>Client Name</TableHead>
          <TableHead>Preview</TableHead>
          <TableHead>Delete</TableHead>
          <TableHead>Share</TableHead>
        </TableHeader>
        <TableBody>
          {reports.map((rep: any) => (
            <TableRow key={rep.id}>
              <TableCell>{rep.id}</TableCell>
              <TableCell>{rep.report.orderdetail.client}</TableCell>
              <TableCell className="text-center">
                <a href={`/report-list/${rep.id}`}>
                  <Eye />
                </a>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => handleDelete(rep.id)}
                  className="text-center"
                >
                  <Trash />
                </button>
              </TableCell>
              <TableCell>
                <button
                  onClick={() => onOpen("sharePdf", { id: rep.id })}
                  className="text-center"
                >
                  <Share2 />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Report;
