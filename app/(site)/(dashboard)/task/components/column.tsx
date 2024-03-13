"use client";

import { Client, Order, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import moment from "moment";
import { DataTableRowActions } from "./data-table-action-row";

export type Task = {
  id: string;
  taskName: string;
  client: Client;
  order: Order;
  user: User;
  requiredBy: Date;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "taskName",
    header: "Task Name",
  },
  {
    accessorKey: "requiredBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {moment(row.getValue("requiredBy")).format("YY-MM-DD")}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client Name" />
    ),
    cell: ({ row }) => (
      <div>
        {row.original.client.name ?? "Unassigned"}
      </div>
    ),
  },
  {
    accessorKey: "user",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Name" />
    ),
    cell: ({ row }) => (
      <div>
        {row.original.user.name ?? "Unassigned"}
      </div>
    ),
  },
/*   {
    accessorKey: "Action",
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }, */
];
