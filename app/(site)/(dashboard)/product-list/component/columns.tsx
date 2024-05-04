"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-action-row";
import { DataTableColumnHeader } from "@/app/share//data-table-column-header";
export type Product = {
  id: string;
  productName: string;
  country: string;
  language: string;
  price: string;
};
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "productName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product Name" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Country" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "language",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Language" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "Action",
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
