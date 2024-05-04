"use client";

import LoadingComponent from "@/app/share//LoadingComponent";

const loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <LoadingComponent />
    </div>
  );
};

export default loading;
