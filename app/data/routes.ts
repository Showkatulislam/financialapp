import { File, List, ListChecks, ListOrdered, Plus, User } from "lucide-react";

export const routes = [
  {
    label: "Add Client",
    icon: Plus,
    href: "/add-client",
  },
  {
    label: "Clients",
    icon: User,
    href: "/client-list",
  },
  {
    label: "Add Product",
    icon: Plus,
    href: "/add-product",
  },
  {
    label: "Product list",
    icon: List,
    href: "/product-list",
  },

  {
    label: "Add Order",
    icon: Plus,
    href: "/add-order",
  },
  {
    label: "Orders",
    icon: ListChecks,
    href: "/order-list",
  },
  {
    label: "Invoices",
    icon: Plus,
    href: "/create-invoice",
  },
  {
    label: "Invoices-list",
    icon: File,
    href: "/invoice-list",
  },
  {
    label: "New Report",
    icon: Plus,
    href: "/create-report",
  },
  {
    label: "report-list",
    icon: File,
    href: "/report-list",
  },

  {
    label: "Add User",
    icon: Plus,
    href: "/add-user",
  },
  {
    label: "User list",
    icon: User,
    href: "/user-list",
  },
  {
    label: "Admin",
    icon: User,
    href: "/admin-list",
  },
];
