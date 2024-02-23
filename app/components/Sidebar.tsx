"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import React from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { routes } from "@/app/data/routes";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./togglebutton";
const Sidebar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="flex flex-col space-y-1 py-5 border-r px-8 overflow-y-auto h-full">
      <div className="flex items-center gap-x-2 justify-between mb-4">
        <div className={`cursor-pointer duration-500 h-12 w-12`}>
          <Image src={logo} alt="logo" />
        </div>

        <h1 className={` origin-left font-medium text-xl duration-200`}>
          FINANCE GO
        </h1>
      </div>
      {routes.map((route) => (
        <Link href={route.href} key={route.label}>
          <div
            className={cn(
              "flex gap-2 p-2",
              path.includes(route.href) ? "text-muted-foreground" : ""
            )}
          >
            <route.icon className={cn("w-5 h-5 mr-3 font-extrabold")} />
            {route.label}
          </div>
        </Link>
      ))}
      <div className="fixed right-0 flex gap-x-4 items-center pr-10">
      <UserButton afterSignOutUrl="/"/>
      <ModeToggle/>
      </div>
    </div>
  );
};

export default Sidebar;
