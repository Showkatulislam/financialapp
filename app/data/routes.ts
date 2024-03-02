import { FileBarChart, List,  Plus, User, FileCheck, UserPlus, ClipboardPlus, ShieldCheck } from "lucide-react";

export const routes = [
  {
    label: "Add client",
    icon:  UserPlus,
    href: "/add-client",
  },
  {
    label: "Client list",
    icon: User,
    href: "/client-list",
  },
  {
    label: "Add product",
    icon: Plus,
    href: "/add-product",
  },
  {
    label: "Product list",
    icon: List,
    href: "/product-list",
  },

  {
    label: "Add order",
    icon: Plus,
    href: "/add-order",
  },
  {
    label: "Order list",
    icon: List,
    href: "/order-list",
  },
  {
    label: "New invoice",
    icon: ClipboardPlus,
    href: "/create-invoice",
  },
  {
    label: "Invoice list",
    icon: FileCheck,
    href: "/invoice-list",
  },
  {
    label: "New report",
    icon: ClipboardPlus,
    href: "/create-report",
  },
  {
    label: "Report list",
    icon: FileBarChart,
    href: "/report-list",
  },

  {
    label: "Add user",
    icon: UserPlus,
    href: "/add-user",
  },
  {
    label: "User list",
    icon: User,
    href: "/user-list",
  },
  {
    label: "Admin",
    icon: ShieldCheck,
    href: "/admin-list",
  },
];
