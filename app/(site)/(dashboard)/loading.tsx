'use client'
import { SkeletonTable } from "../../components/Skeleton-Component";
const loading = () => {
  return (
    <div className="h-full flex justify-center items-center pl-80">
     <SkeletonTable/>
    </div>
  );
};

export default loading;
