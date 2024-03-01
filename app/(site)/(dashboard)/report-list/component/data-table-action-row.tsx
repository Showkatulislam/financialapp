"use client";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AlertModal from "@/components/model/alert-modal";
import RightViewModalNoTrigger from "@/components/model/right-view-modal";
import qs from "query-string";
import { ReportSchema } from "./schema";
import { EditClient } from "./edit-client";
interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const report = ReportSchema.parse(row.original);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const onDelete = async () => {
    setLoading(true);
    try {
      const url = qs.stringifyUrl({
        url: "/api/report",
        query: {
          reportId: report.id,
        },
      });
      await axios.delete(url);
      toast.success("User Delete Successfully");
      router.refresh();
    } catch (error) {
      toast.error("User Not Delete");
    } finally {
      setLoading(false);
      setOpen(false);
      router.refresh();
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <RightViewModalNoTrigger
        title={"Edit client"}
        open={updateOpen}
        setOpen={setUpdateOpen}
      >
        {/* <EditClient intialData={row.original} setOpen={setUpdateOpen} /> */}
        <p>hello</p>
      </RightViewModalNoTrigger>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[260px]">
          <DropdownMenuItem onClick={() => setUpdateOpen(true)}>
            <Pencil className="mr-2 w-4 h-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 w-4 h-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
