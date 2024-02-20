import { Skeleton } from "@/components/ui/skeleton"
const loading = () => {
  return (
    <div className="m-12 flex justify-center items-center gap-10">
      <Skeleton className="max-w-screen-md min-w-96 h-full rounded-full"/>
      <Skeleton className="max-w-screen-md min-w-96 h-full rounded-full"/>
    </div>
  );
};

export default loading;
