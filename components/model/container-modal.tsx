import { ReactNode, useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
interface ModalProps {
    isOpen: boolean;
    onClose: (boolean: false) => void;
    children:ReactNode,
    title:string
  }
export const ContainerModal=({title,isOpen,onClose,children}:ModalProps)=>{
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">{title}</DialogTitle>
            <DialogDescription className="text-center">
            Fill out the form below to create a new task.
            </DialogDescription>
          </DialogHeader>
          <div className="w-96">
            {children}
          </div>
          <DialogFooter>
            <DialogClose asChild className="justify-end">
              <Button type="button" variant="destructive">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
}