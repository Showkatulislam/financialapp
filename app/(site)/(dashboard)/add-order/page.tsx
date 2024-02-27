import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";

const page = async () => {
  const clients = await GetClient();
  const products = await getProduct();
  return (
    <Container
    title="Add Order"
    >
      <AddOrder clients={clients} products={products}/>
    </Container>
  );
};

export default page;
