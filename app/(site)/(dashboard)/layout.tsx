import Sidebar from "@/app/components/Sidebar";
import { ReactNode } from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/app/components/togglebutton";
import { initailUser } from "@/lib/intial-user";

const layout = async ({ children }: { children: ReactNode }) => {
  const Iam = await initailUser();
  return (
    <div className="flex w-full h-full">
      <div className="w-64 border-r fixed h-full">
        <Sidebar Iam={Iam} />
      </div>
      <div className="pl-72 flex flex-col space-y-3 max-w-7xl mx-auto w-full mt-2">
        <div className="h-16 border px-12 py-4">
          <div className="flex flex-row-reverse gap-x-6">
            <ModeToggle />
            <SignInButton>
              <UserButton afterSignOutUrl="/" />
            </SignInButton>
          </div>
        </div>
        <div className="pt-5 max-h-fit">{children}</div>
      </div>
    </div>
  );
};

export default layout;
/*     <div className="flex items-center">
      <div className="fixed inset-y-0 border-r">
        <Sidebar Iam={Iam} />
      </div>
      <div className="pl-60  m-4 h-full w-full">
        <div className="flex justify-end items-center gap-x-6 border-b pb-2">
          <UserButton afterSignOutUrl="/" />
          <ModeToggle />
        </div>
        <div>{children}</div>
      </div>
    </div> */
