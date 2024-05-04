import getCurrentUser from "@/app/actions/get-user";
import { AddProduct } from "./add-product";
import { redirect } from "next/navigation";

const page = async() => {
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
    <div className="border-l">
        <AddProduct />
      </div>
  );
};

export default page;
