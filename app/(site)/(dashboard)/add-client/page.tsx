import React from "react";
import { AddClient } from "./add-client";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";

const page = async() => {
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
      <div className="border-l">
        <AddClient />
      </div>
  );
};

export default page;
