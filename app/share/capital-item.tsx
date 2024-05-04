import { cn } from "@/lib/utils";

interface CapitalItemProps {
  title: string;
  capital: string;
  text: string;
  bg?:boolean
}
const CapitalItem = ({bg, text, title, capital }: CapitalItemProps) => {
  return (
    <div className={cn("grid grid-cols-12  text-base font-light lg:p-1 p-0.5",bg&&"bg-[#ECECEC]")}>
      <p className="col-span-3">{title}</p>
      <p className="col-span-1">{capital}</p>
      <p className="col-span-1">{parseInt(text).toLocaleString('en-US')}</p>
    </div>
  );
};

export default CapitalItem;