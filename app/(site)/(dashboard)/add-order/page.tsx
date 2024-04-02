import { GetClient } from "@/app/actions/get-client";
import { AddOrder } from "./add-order";
import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";
import { getUser } from "@/app/actions/get-user";
import { promise } from "zod";

const page = async () => {
  const clientData = GetClient();
  const productData = getProduct();
  const userData=getUser()
  const [clients,products,users]=await Promise.all([clientData,productData,userData]);
  return (
    <Container
    title="Add Order"
    >
      <AddOrder clients={clients} products={products} users={users}/>
    </Container>
  );
};

export default page;
