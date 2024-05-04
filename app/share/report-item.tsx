import { cn } from "@/lib/utils";

interface reportItemProps {
  title: string;
  description: string;
  className?:string,
  bg?:boolean
}
const ReportItem = ({bg,className,title, description }: reportItemProps) => {
  return (
    <div className={cn("grid grid-cols-12 text-base  lg:p-1 p-0.5",bg&&"bg-[#ECECEC]")}>
      <p className="col-span-3">{title}</p>
      <p className={cn('col-span-9',className)}>{description}</p>
    </div>
  );
};

export default ReportItem;