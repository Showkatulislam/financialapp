import OrderList from "./order-list";
import { getOrder } from "@/app/actions/get-order";
import { GetClient } from "@/app/actions/get-client";
import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";
const page = async() => {
  const orders=await getOrder()
  const clients=await GetClient()
  const products=await getProduct()
  console.log(orders);
  
  return (
    <Container
    title="Order list"
    
    >
     <OrderList orders={orders} clients={clients} products={products}/> 
    </Container>
  );
};

export default page;
