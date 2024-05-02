"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-action-row";
import moment from "moment";
import { DataTableColumnHeader } from "@/app/components/data-table-column-header";
export type Order = {
  id: string;
  dob: Date;
  priority: string;
  companyName: string;
  userId: string;
  clientId: string;
  productId: string;
  product: any;
  client: any;
};
export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "progress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "dob",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">
        {moment(row.getValue("dob")).format("YY-MM-DD")}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
  },
  {
    accessorKey: "product",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
    cell: ({ row }) => (
      <div>
        {row.original.product.productName ?? "Unassigned"}
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Client Name" />
    ),
    cell: ({ row }) => (
      <div >{row.original.client.name ?? "Unassigned"}</div>
    ),
  },
  {
    accessorKey: "Action",
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
