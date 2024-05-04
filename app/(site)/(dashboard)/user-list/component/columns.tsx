"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-action-row";
import { DataTableRollAction } from "./data-table-roll-action";
import { DataTableColumnHeader } from "@/app/share//data-table-column-header";
export type User = {
  id: string;
  name: string;
  email: string;
};
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="email" />
    ),
  },
  {
    accessorKey:'Change role',
    id: "role",
    cell: ({ row }) => <DataTableRollAction row={row} />,
  },
  {
    accessorKey:'Action',
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },

];
