import Title from "@/components/Title";
import { ShowProduct } from "./product-list";
import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";

const page = async() => {
  const products=await getProduct()
  return (
    <Container
     title="Product List">
      <ShowProduct products={products} />
    </Container>
  );
};

export default page;
