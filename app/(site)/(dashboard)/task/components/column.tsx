"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import moment from "moment";
import { DataTabledo } from "./data-table-do";
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
      <div >{row?.original.client.name ?? "Unassigned"}</div>
    ),
  },
  {
    accessorKey:'Do',
    id: "do",
    cell: ({ row }) => <DataTabledo row={row}/>,
  }
];
