import { Button } from "@/components/ui/button";
import { useState } from "react";

export const AddTask = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="p-4">
        <Button>Add Task</Button>
      </div>
    </>
  );
};
