"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-action-row";
import { DataTableRowViewActions } from "./data-table-action-view";
import { DataTableRowShareActions } from "./data-table-action-share";
import { report } from "@/hooks/ReportState";
export type Report = {
  id: string;
  report: report;
};
export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row }) => (
      <div>{row.original.report.companyName ?? "Unassigned"}</div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "report",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client" />
    ),
    cell: ({ row }) => <div>{row.original.report.client ?? "Unassigned"}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "View",
    id: "view",
    cell: ({ row }) => <DataTableRowViewActions row={row} />,
  },
  {
    accessorKey: "Share link",
    id: "share",
    cell: ({ row }) => <DataTableRowShareActions row={row} />,
  },
  {
    accessorKey: "Action",
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
