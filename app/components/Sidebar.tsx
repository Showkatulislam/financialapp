"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { routes } from "@/app/data/routes";
import { ModeToggle } from "@/app/components/togglebutton";
const Sidebar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div
      className="flex flex-col h-full w-full bg-slate-50
     dark:bg-slate-800 space-y-2 py-5  border-r px-8"
    >
      <div className="flex items-center gap-x-3 border-b">
        <div className="w-6 h-6">
          <Image src={logo} alt="logo" />
        </div>
        <p className="text-md text-indigo-500 font-bold">Finance Go</p>
      </div>
      {routes.map((route) => (
        <Link href={route.href} key={route.label}>
          <div
            className={cn(
              "flex items-center flex-1 py-2 font-bold",
              route.color,
              path.includes(route.href)
                ? "bg-gray-600/50 bg:bg-gray-600/50  py-1.5 rounded-md"
                : ""
            )}
          >
            <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
            {route.label}
          </div>
        </Link>
      ))}

      <ModeToggle />

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Sidebar;
