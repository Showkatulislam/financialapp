import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";
import { getAllUser } from "@/app/actions/getAllUser";


const page = async () => {
  const clients = await GetClient();
  const products = await getProduct();
  const users = await getAllUser()
  return (
    <div className="border-l">
       <AddOrder clients={clients} products={products} users={users} />
    </div>
  );
};

export default page;
