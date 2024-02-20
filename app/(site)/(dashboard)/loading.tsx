'use client'
import { SkeletonTable } from "../../components/Skeleton-Component";
const loading = () => {
  return (
    <div className="h-full flex justify-center items-center px-20">
     <SkeletonTable/>
    </div>
  );
};

export default loading;
