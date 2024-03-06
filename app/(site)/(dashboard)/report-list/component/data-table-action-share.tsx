import RightViewModalNoTrigger from "@/components/model/right-view-modal";
import { Button } from "@/components/ui/button";
import { Row } from "@tanstack/react-table";
import { useState } from "react";
import { Reportpreview } from "../[reportId]/report/report-preview";
import { Share } from "lucide-react";
import { ShareReportModal } from "@/components/model/share-report-modal";

interface DataTableRowShareProps<TData> {
  row: Row<TData>;
}

export function DataTableRowShareActions<TData>({
  row,
}: DataTableRowShareProps<TData>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ShareReportModal isOpen={open} onClose={setOpen} row={row?.original} />
      <Button
        variant={"ghost"}
        className="flex h-8 w-8 p-0  text-center"
        onClick={() => setOpen(true)}
      >
        <Share className="w-4 h-4 text-center" />
      </Button>
    </>
  );
}
