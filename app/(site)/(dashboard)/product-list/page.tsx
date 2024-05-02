import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/components/Container";
import { ProductDataTable } from "./component/data-table";
import { columns } from "./component/columns";

const page = async() => {
  const products=await getProduct()
  return (
    <Container
     title="Product list" className="">
      <ProductDataTable columns={columns} data={products}/>
    </Container>
  );
};

export default page;
