import { getOrder } from "@/app/actions/get-order";
import Container from "@/app/components/Container";
import { OrderDataTable } from "./component/data-table";
import { columns } from "./component/columns";
const page = async() => {
  const orders=await getOrder()
  return (
    <Container
    title="Order list"
    >
      <OrderDataTable columns={columns} data={orders}/>
    </Container>
  );
};

export default page;
