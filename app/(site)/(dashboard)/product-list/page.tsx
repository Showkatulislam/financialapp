import { getProduct } from "@/app/actions/get-product";
import Container from "@/app/share//Container";
import { ProductDataTable } from "./component/data-table";
import { columns } from "./component/columns";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";

const page = async() => {
 
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  const products=await getProduct()
  return (
    <Container
     title="Product list" className="">
      <ProductDataTable columns={columns} data={products}/>
    </Container>
  );
};

export default page;
