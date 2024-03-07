"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Row } from "@tanstack/react-table";
import { Check, ShieldAlert, ShieldCheck } from "lucide-react";
import { userSchema } from "./schema";
import qs from "query-string";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface DataTableRollActionProps<TData> {
  row: Row<TData>;
}
export function DataTableRollAction<TData>({
  row,
}: DataTableRollActionProps<TData>) {
  const user = userSchema.parse(row.original);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const ChangeRoll = async (role: string) => {
    console.log(role);
    setLoading(true);
    try {
      await axios.patch(`/api/user/${user.id}`, { role: role });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            {user.role === "ADMIN" ? (
              <ShieldAlert className="h-4 w-4 text-rose-500" />
            ) : (
              <ShieldCheck className="h-4 w-4  text-indigo-500" />
            )}
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[260px]">
          <DropdownMenuItem onClick={() => ChangeRoll("ADMIN")}>
            <ShieldAlert
              className="h-4 w-4  text-rose-500 mr-2"
            />
            admin
            {user.role === "ADMIN" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => ChangeRoll("GUEST")}>
            <ShieldCheck className="h-4 w-4 text-indigo-500 mr-2" />
            user
            {user.role === "GUEST" && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
