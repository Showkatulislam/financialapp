"use client";

import LoadingComponent from "@/app/components/LoadingComponent";

const loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <LoadingComponent />
    </div>
  );
};

export default loading;
