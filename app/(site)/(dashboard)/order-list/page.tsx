import { getOrder } from "@/app/actions/get-order";
import { TableContainer } from "./component/table-container";
const page = async() => {
  const orders=await getOrder()
  return (
    <div>
      <TableContainer orders={orders}/>
    </div>
  );
};

export default page;
