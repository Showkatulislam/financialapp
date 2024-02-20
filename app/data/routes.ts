import { File, List, ListChecks, ListOrdered, Plus, User } from "lucide-react";

export const routes = [
  {
    label: "Add Client",
    icon: Plus,
    href: "/add-client",
    color: "text-pink-500",
  },
  {
    label: "Clients",
    icon: User,
    href: "/client-list",
    color: "text-deep-purple-500",
  },
  {
    label: "Add Product",
    icon: Plus,
    color: "text-indigo-400",
    href: "/add-product",
  },
  {
    label: "Product list",
    icon: List,
    color: "text-sky-500",
    href: "/product-list",
  },

  {
    label: "Add Order",
    icon: Plus,
    color: "text-pink-300",
    href: "/add-order",
  },
  {
    label: "Orders",
    icon: ListChecks,
    color: "text-orange-500",
    href: "/order-list",
  },
  {
    label: "Invoices",
    icon: Plus,
    href: "/create-invoice",
    color: "text-sky-600",
  },
  {
    label: "Invoices",
    icon: File,
    href: "/invoice-list",
    color: "text-blue-400",
  },
  {
    label: "New Report",
    icon: Plus,
    href: "/create-report",
    color: "text-emerald-500",
  },
  {
    label: "report-list",
    icon: File,
    href: "/report-list",
    color: "text-cyan-500",
  },
  {
    label: "Admin",
    icon: User,
    href: "/admin-list",
    color: "text-fuchsia-500",
  },
];
