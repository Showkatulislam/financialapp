"use client";
import { Skeleton } from "@/components/ui/skeleton";
export const SkeletonTable = () => {
  return (
     <div className="flex flex-col space-y-2 mx-auto max-w-lg">
       <Skeleton className="h-6 max-w-lg rounded-md" />
       <Skeleton className="h-6 max-w-lg rounded-md" />
       <Skeleton className="h-6 max-w-lg rounded-md" />
       <Skeleton className="h-6 max-w-lg  rounded-md" />
     </div>
  );
};
