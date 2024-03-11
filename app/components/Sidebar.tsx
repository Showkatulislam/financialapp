"use client";
import { cn } from "@/lib/utils";

import Link from "next/link";
import React, { useEffect } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Adminroutes, userRoutes } from "@/app/data/routes";
import { User } from "@prisma/client";
import { useUser } from "@/hooks/useUser";

interface sidebarProps {
  Iam: User;
}
const Sidebar = ({ Iam }: sidebarProps) => {
  const path = usePathname();
  const { setRole } = useUser();
  useEffect(() => {
    setRole(Iam.role);
  }, [Iam.role, setRole]);
  return (
    <div className="flex flex-col space-y-1 py-5  px-8 overflow-y-auto h-full">
      <div className="flex items-center gap-x-2  mb-4">
        <div className={`cursor-pointer duration-500 h-12 w-12`}>
          <Image src={logo} alt="logo" />
        </div>

        <h1 className={`origin-left font-medium text-xl duration-200`}>
          FINANCE GO
        </h1>
      </div>
      <div className="overflow-y-auto flex flex-col space-y-3">
        {Iam.role === "ADMIN" &&
          Adminroutes.map((route) => (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  "flex gap-2 px-2",
                  path.includes(route.href)
                    ? "text-muted-foreground px-2"
                    : ""
                )}
              >
                <route.icon className={cn("w-5 h-5 mr-3")} />
                <span className="text-sm ">{route.label}</span>
              </div>
            </Link>
          ))}
        {Iam.role === "GUEST" &&
          userRoutes.map((route) => (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  "flex gap-2 px-2",
                  path.includes(route.href)
                    ? "text-muted-foreground px-2 "
                    : ""
                )}
              >
                <route.icon className={cn("w-5 h-5 mr-3 font-extrabold")} />
                <span className="text-sm ">{route.label}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
