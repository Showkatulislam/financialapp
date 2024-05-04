import Sidebar from "@/app/share//Sidebar";
import { ReactNode } from "react";

import { ModeToggle } from "@/app/share//togglebutton";
import getCurrentUser from "@/app/actions/get-user";
import UserLogoutBtn from "@/app/share//UserLogoutBtn";

const layout = async ({ children }: { children: ReactNode }) => {
  const Iam = await getCurrentUser();
  return (
    <div className="flex w-full h-full">
      <div className="w-64 border-r fixed h-full">
        <Sidebar Iam={Iam} />
      </div>
      <div className="pl-72 flex flex-col space-y-3 max-w-7xl mx-auto w-full  ">
        <div className="h-16 flex justify-between items-center border px-12 py-4">
          <p className="text-xl font-bold">{Iam?.name?.toLocaleUpperCase()}</p>
          <div className="flex flex-row-reverse gap-x-6">
            <ModeToggle />
            <UserLogoutBtn />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
