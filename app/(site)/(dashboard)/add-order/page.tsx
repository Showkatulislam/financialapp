import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";
import { getUser } from "@/app/actions/get-user";

const page = async () => {
  const clients = await GetClient();
  const products = await getProduct();
  const users=await getUser()
  return (
    <Container
    title="Add Order"
    >
      <AddOrder clients={clients} products={products} users={users}/>
    </Container>
  );
};

export default page;
