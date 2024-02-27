import Sidebar from "@/app/components/Sidebar";
import { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/app/components/togglebutton";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="lg:fixed inset-y-0">
        <Sidebar />
      </div>
      <div className="lg:pl-60 h-full ">
        <div className="flex justify-end items-center gap-x-6 p-5">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle />
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default layout;
