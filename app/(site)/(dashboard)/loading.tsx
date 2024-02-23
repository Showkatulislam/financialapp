"use client";

import { SkeletonTable } from "@/app/components/Skeleton-Component";

const loading = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <SkeletonTable />
    </div>
  );
};

export default loading;
