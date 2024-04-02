"use client";
import { Button } from "@/components/ui/button";
import { ReportState } from "@/hooks/ReportState";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface DataTabledoProps<TData> {
  row: Row<TData>;
}

export const DataTabledo: React.FC<DataTabledoProps<any>> = ({ row }) => {
  const { setTextField, report } = ReportState();
  const router = useRouter();
  const setValue = () => {
    setTextField({ client: row.original.client.name });
    setTextField({ priority: row.original.priority });
    setTextField({ companyName: row.original.companyName });
    setTextField({ status: "pending" });
    setTextField({ id: row.original.id });
    router.push("/create-report");
  };
  return (
    <div>
      <Button disabled={row.original.progress==='Complete'} onClick={setValue}>{row.original.progress=="Pending"?"Do":"Done"}</Button>
    </div>
  );
};
