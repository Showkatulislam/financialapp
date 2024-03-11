import { FileBarChart, List,  Plus, User, FileCheck, UserPlus, ClipboardPlus, ShieldCheck, ListTodo } from "lucide-react";
export const Paymentscolors=[
  'text-green-600',
  'text-green-500',
  'text-green-400',
  `text-red-400`,
  `text-red-500`,
  `text-gray-700`,
]
export const Riskcolors=[
  'text-green-600',
  'text-green-500',
  'text-green-400',
  'text-green-300',
  `text-slate-400`,
  `text-red-400`,
  `text-red-500`,
  `text-red-600`,
  `text-red-700`,
  `text-red-800`,
  `text-yellow-500`,
  'text-gray-600'
]
export const Adminroutes = [
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
    label: "Task",
    icon: ListTodo,
    href: "/task",
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

export const userRoutes=[
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
]
