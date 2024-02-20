import Title from "@/components/Title";
import OrderList from "./order-list";
import { getOrder } from "@/app/actions/get-order";
import { GetClient } from "@/app/actions/get-client";
import { getProduct } from "@/app/actions/get-product";

const page = async() => {
  const orders=await getOrder()
  const clients=await GetClient()
  const products=await getProduct()
  console.log(orders);
  
  return (
    <div className="h-full flex justify-center items-center">
      <div className="max-w-3xl">
        <Title title="Order List" />
        <OrderList orders={orders} products={products} clients={clients} />
      </div>
    </div>
  );
};

export default page;
