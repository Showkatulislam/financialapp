import Title from "@/components/Title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { financialdata } from "@/hooks/ReportState";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface FinancialTableProps {
  rows: financialdata[];
  title: string;
  deleteFun: (id: string) => void;
  editFun: (id: string) => void;
}

const FinancialTable = ({
  rows,
  title,
  deleteFun,
  editFun,
}: FinancialTableProps) => {
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
          <TableHead></TableHead>
          {rows.map((e) => (
            <TableHead key={e.id}>{e.year}</TableHead>
          ))}
        </TableHeader>
        <TableBody>
          <TableRow className="border-none font-semibold">
            <TableCell>year</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.year}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Turnover</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.turnover}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Operating profit</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.oprofit}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Net profit</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.nprofit}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Dowry. to amortization</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.damorliztion}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Equity before allocation</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.equityballocation}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Suppliers and Linked Account</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.supplieraccounts}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Consumed purchases</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.purchases}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Clients and associated accounts</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.clientaccounts}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Stocks</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.stocks}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Balance sheet total</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.total}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Balance sheet total</TableCell>
            {rows.map((f) => (
              <TableCell key={f.id}>{f.total}</TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>delete</TableCell>
            {rows.map((f: any) => (
              <TableCell key={f.id}>
                <Trash className="w-4 h-4" onClick={() => deleteFun(f?.id)} />
              </TableCell>
            ))}
          </TableRow>
          <TableRow className="border-none font-semibold">
            <TableCell>Edit</TableCell>
            {rows.map((f: any) => (
              <TableCell key={f.id}>
                <Edit className="w-4 h-4" onClick={() => editFun(f?.id)} />
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default FinancialTable;
