import RightViewModalNoTrigger from "@/components/model/right-view-modal";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Reportpreview } from "../[reportId]/report/report-preview";

interface DataTableRowViewsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowViewActions<TData>({
  row,
}: DataTableRowViewsProps<TData>) {
  const [open,setOpen]=useState(false)
  return (
    <>
      <RightViewModalNoTrigger
      title="Report Preview"
      open={open}
      setOpen={setOpen}
      >
         <Reportpreview report={row.original}/>
      </RightViewModalNoTrigger>
      <Button variant={'ghost'}
       className="flex h-8 w-8 p-0 data-[state=open]:bg-muted justify-center"
       onClick={()=>setOpen(true)}
      >
        <Eye className="w-4 h-4"/>
      </Button>
    </>
  );
}
