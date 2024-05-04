"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import React, { useEffect } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";
import { Adminroutes, userRoutes } from "../constant/routes";

interface sidebarProps {
  Iam: User | null;
}
const Sidebar = ({ Iam }: sidebarProps) => {
  const path = usePathname();
  return (
    <div className="flex flex-col space-y-1 py-5  px-8 overflow-y-auto h-full">
      <div className="flex items-center gap-x-2  mb-4">
        <div className={`cursor-pointer duration-500 h-12 w-12`}>
          <Image src={logo} alt="logo" />
        </div>

        <h1 className={`origin-left mt-[-4px] font-medium text-xl duration-200`}>
          FINANCE GO
        </h1>
      </div>
      <div className="overflow-y-auto flex flex-col space-y-2">
        {Iam?.role === "ADMIN" &&
          Adminroutes.map((route) => (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  "flex items-center gap-2 px-2 rounded-md",
                  path.includes(route.href)
                    ? "text-muted-foreground px-2 bg-secondary/90"
                    : ""
                )}
              >
                <route.icon
                  className={cn(
                    "w-8 h-8 mr-3 p-1.5 rounded-full font-extrabold bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                />
                <span className="text-sm ">{route.label}</span>
              </div>
            </Link>
          ))}
        {Iam?.role === "GUEST" &&
          userRoutes.map((route) => (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  "flex items-center gap-2 px-2 rounded-md",
                  path.includes(route.href)
                    ? "text-muted-foreground px-2 bg-secondary/90"
                    : ""
                )}
              >
                <route.icon
                  className={cn(
                    "w-8 h-8 mr-3 p-1.5 rounded-full font-extrabold bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                />
                <span className="text-sm ">{route.label}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
