"use client";
import { Skeleton } from "@/components/ui/skeleton";
export const SkeletonTable = () => {
  return (
    <div className="flex flex-col space-y-4 p-10 max-w-5xl">
      <Skeleton className="h-6 w-screen" />
      <Skeleton className="h-6 w-screen" />
      <Skeleton className="h-6 w-screen" />
      <Skeleton className="h-6 w-screen" />
    </div>
  );
};
