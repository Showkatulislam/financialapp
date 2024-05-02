"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const UserLogoutBtn = () => {
  const handlelogout = () => {
    signOut();
  };
  return (
    <div>
      <Button onClick={handlelogout} size={"icon"} variant="secondary">
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default UserLogoutBtn;
