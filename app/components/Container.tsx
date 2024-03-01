import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface ContainerProps {
  title: string;
  visibility?: string;
  children: React.ReactNode;
}

const Container = ({
  title,
  visibility,
  children,
}: ContainerProps) => {
  return (
    <div className="flex-1 space-y-4 px-8 py-4 border-l h-full overflow-hidden">
      <Heading
        title={title}
        visibility={visibility}
      />
      <Separator />
      <div className="text-sm h-full overflow-auto pb-12  space-y-5">
        {children}
      </div>
    </div>
  );
};

export default Container;
