"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useModal } from "@/hooks/modeStore";
import { OrderWithClientAndProduct } from "@/types";
import { Client, Product } from "@prisma/client";
import { format } from "date-fns";
import { Edit, Trash } from "lucide-react";
import { useEffect, useState } from "react";

interface OrderListProps {
  orders: OrderWithClientAndProduct[];
  products: Product[];
  clients: Client[];
}
const OrderList = ({ orders, products, clients }: OrderListProps) => {
  const [allorder, setOrder] = useState(orders);
  const [allproduct, _] = useState(products);
  const [allclient, __] = useState(clients);
  const { onOpen } = useModal();
  useEffect(() => {
    setOrder(orders);
  }, [orders]);
  console.log(allorder)
  return (
    <Table className="border p-4 shadow-sm">
      <TableCaption>A list of your recent Order.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>client Name</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Delete</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allorder?.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order?.client?.name}</TableCell>
            <TableCell>{order?.product?.productName}</TableCell>
            <TableCell>{format(order?.dob, "dd/mm/yyyy")}</TableCell>
            <TableCell>{order?.priority}</TableCell>
            <TableCell>
              <Trash
                onClick={() => onOpen("deleteOrder", { id: order.id })}
                className="text-rose-600"
              />
            </TableCell>
            <TableCell>
              <Edit
                onClick={() =>
                  onOpen("editOrder", {
                    order,
                    clients: allclient,
                    products: allproduct,
                  })
                }
                className="text-blue-600"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderList;
