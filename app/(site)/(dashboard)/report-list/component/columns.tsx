"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-action-row";
export type Report = {
  id: string;
  report:any;
};
export const columns: ColumnDef<Report>[] = [
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell:({row})=>(<div>
     {row.original.report.companydetail?.companyName??"Unassigned"}
    </div>),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "report",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client" />
    ),
    cell:({row})=>(<div>
      {row.original.report.orderdetail?.client??"Unassigned"}
     </div>),
    enableSorting: true,
    enableHiding: false
  },
  {
    accessorKey: "View",
    id: "view",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
  {
    accessorKey: "Action",
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
