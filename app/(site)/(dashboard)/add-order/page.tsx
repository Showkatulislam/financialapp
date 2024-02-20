import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";

const page = async () => {
  const clients = await GetClient();
  const products = await getProduct();
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-96">
        <AddOrder clients={clients} products={products} />
      </div>
    </div>
  );
};

export default page;
