import ReportTitle from "@/app/components/report-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReportStore } from "@/hooks/useReportStore";
import { useEffect, useState } from "react";

export const ShareHolderList = () => {
  const { shareholders } = useReportStore();
  return (
    <div>
      <ReportTitle title="SHAREHOLDERS/ASSOCIATES" />
      <Table>
        <TableHeader>
          <TableHead className="text-blue-600 font-normal">Name</TableHead>
          <TableHead className="text-blue-600 font-normal">
            Percentage
          </TableHead>
          <TableHead className="text-blue-600 font-normal">
            Nationality
          </TableHead>
        </TableHeader>
        <TableBody>
          {shareholders.map((s) => (
            <TableRow key={s.id} className="border-none">
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
