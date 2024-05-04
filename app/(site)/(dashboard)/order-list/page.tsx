import { getOrder } from "@/app/actions/get-order";
import { TableContainer } from "./component/table-container";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";
const page = async() => {
  
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  const orders=await getOrder()
  return (
    <div>
      <TableContainer orders={orders}/>
    </div>
  );
};

export default page;
