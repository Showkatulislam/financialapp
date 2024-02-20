
import Sidebar from "@/app/components/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="lg:fixed inset-y-0">
        <Sidebar />
      </div>
      <div className="lg:pl-60 h-full">{children}</div>
    </div>
  );
};

export default layout;
