"use client";
import { ContainerModal } from "@/components/model/container-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddTask } from "./add-task";
export const Task = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ContainerModal title="Create Task" isOpen={isOpen} onClose={setOpen}>
        <AddTask Colse={setOpen}/>
      </ContainerModal>
      <div className="p-4">
        <Button onClick={() => setOpen(true)}>Add Task</Button>
      </div>
    </>
  );
};
