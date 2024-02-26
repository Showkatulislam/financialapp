"use client";
import { Skeleton } from "@/components/ui/skeleton";
export const SkeletonTable = () => {
  return (
     <div className="flex flex-col space-y-2">
       <Skeleton className="h-6 w-96 rounded-md" />
       <Skeleton className="h-6 w-96 rounded-md" />
       <Skeleton className="h-6 w-96 rounded-md" />
       <Skeleton className="h-6 w-96 rounded-md" />
     </div>
  );
};
