import { Lock } from "lucide-react";

interface HeadingProps {
  title: string;

  visibility?: string;
}

const Heading = ({ title, visibility }: HeadingProps) => {
  return (
    <div className="">
      <h2 className="flex gap-2 text-3xl font-bold tracking-tight">
        {title}
        {visibility === "private" ? <Lock /> : ""}
      </h2>
    </div>
  );
};

export default Heading;
