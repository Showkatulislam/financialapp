"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Check, Copy, RefreshCcw } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { useOrigin } from "@/hooks/use-orgin";
import { useModal } from "@/hooks/modeStore";

export const ShareReportModal = () => {
    const [copied,setCopied]=useState(false)
    const [loading,setLoading]=useState(false)
    const {isOpen,onClose,type,data,onOpen}=useModal()
    const OpenInvitedModal=isOpen && type==='sharePdf'

    const {id}=data
    const origin=useOrigin()
    const inviteUrl=`${origin}/report-list/${id}`

    const onCopy=()=>{
      setCopied(true)
      navigator.clipboard.writeText(inviteUrl);
      setLoading(true)
    }
  return (
    <Dialog open={OpenInvitedModal} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
           Share pdf
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
            <Label className="uppercase text-sm font-bold text-zinc-500 dark:text-secondary/70">Server invite Link</Label>
            <div className="flex items-center mt-2 space-x-2">
                <Input
                disabled={loading}
                className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                value={inviteUrl}
                />
               <Button 
                disabled={loading}
                onClick={onCopy} 
                size="icon">
                {copied?<Check className="w-4 h-4"/>: <Copy className="w-4 h-4"/>}
              
               </Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};