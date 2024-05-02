import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  title: string;
  visibility?: string;
  children: React.ReactNode;
  className?: string;
}

const Container = ({
  title,
  visibility,
  children,
  className,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "flex-1 space-y-4 px-8 py-4 border-l  h-full  overflow-hidden",
        className
      )}
    >
      <Heading title={title} visibility={visibility} />
      <Separator />
      <div className="text-sm overflow-hidden mb-12   space-y-5">
        {children}
      </div>
    </div>
  );
};

export default Container;
