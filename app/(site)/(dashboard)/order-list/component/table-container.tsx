"use client";
import Container from "@/app/share//Container";
import { OrderDataTable } from "./data-table";
import { columns } from "./columns";
import { OrderWithClientAndProduct } from "@/types";
import { DataTableToolbar } from "./data-table-toolbar";
import { useMemo, useState } from "react";

interface props {
  orders: OrderWithClientAndProduct[];
}
export const TableContainer = ({ orders }: props) => {
  const [property, setProperty] = useState("companyName");
  const [value, setValue] = useState("");
  const [date, setDate] = useState<Date | null>(null); // Specify null as initial
  const filterOrder = useMemo(() => {
    if (!value.trim() && !date) return orders;

    return orders.filter((order: OrderWithClientAndProduct) => {
      const companyNameMatch =
        property === "companyName" &&
        order.companyName.toLowerCase().includes(value.toLowerCase());
      const clientMatch =
        property === "client" &&
        order.client.name.toLowerCase().includes(value.toLowerCase());
      const dateMatch =
        property === "date" &&
        (!date ||
          new Date(order.dob).toDateString() === new Date(date).toDateString());

      return companyNameMatch || clientMatch || dateMatch;
    });
  }, [value, date, orders, property]);
  return (
    <Container title="Order list">
      <DataTableToolbar
        setValue={setValue}
        property={property}
        setProperty={setProperty}
        date={date}
        setDate={setDate}
      />
      <OrderDataTable columns={columns} data={filterOrder} />
    </Container>
  );
};
