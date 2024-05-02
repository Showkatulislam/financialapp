import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import getSession from "./utils/getSessiondata";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
const page = async() => {
  const session=await getSession()
  if(session?.user?.email){
    redirect("/dashboard")
  }
  return (
    <div className="h-full">
      <div className="h-full flex justify-center items-center ">
        <div className="flex flex-col items-center space-y-3">
          <Image src={logo} alt="logo" />
          <p className="text-2xl font-extrabold">LOGIN</p>
          <AuthForm/>
        </div>
      </div>
    </div>
  );
};

export default page;