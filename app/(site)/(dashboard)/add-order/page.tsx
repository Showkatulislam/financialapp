import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";
import { getAllUser } from "@/app/actions/getAllUser";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";


const page = async () => {
  const clients = await GetClient();
  const products = await getProduct();
  const users = await getAllUser()
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
    <div className="border-l">
       <AddOrder clients={clients} products={products} users={users} />
    </div>
  );
};

export default page;
