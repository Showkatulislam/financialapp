import Sidebar from "@/app/components/Sidebar";
import { ReactNode } from "react";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/app/components/togglebutton";
import Container from "@/app/components/Container";
import { initailUser } from "@/lib/intial-user";

const layout = async ({ children }: { children: ReactNode }) => {
  const Iam = await initailUser();
  return (
    <div className="h-full">
      <div className="md:fixed inset-y-0 border-r">
        <Sidebar Iam={Iam} />
      </div>
      <div className="md:pl-60  m-4 h-full">
        <div className="flex justify-end items-center gap-x-6 border-b pb-2">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
