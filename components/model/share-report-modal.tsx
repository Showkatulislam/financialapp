import { CopyIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { useOrigin } from "@/hooks/use-orgin";
interface ModalProps {
  row: any;
  isOpen: boolean;
  onClose: (boolean: false) => void;
}

export const ShareReportModal = ({ isOpen, onClose, row }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [copy, setCopied] = useState(false);
  const origin = useOrigin();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const shareLink = `${origin}/report-list/${row.id}`;
  const onCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={shareLink} readOnly />
          </div>
          <Button
            disabled={copy}
            onClick={onCopy}
            type="submit"
            size="sm"
            className="px-3"
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
