"use client";
import Container from "@/app/components/Container";
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
    const [date, setDate] = useState<Date | null>(null); // Specify null as initial state for date
    const filterOrder = useMemo(() => {
      if (!value.trim()) return orders;
      return orders.filter((order: OrderWithClientAndProduct) => {
        switch (property) {
          case "companyName":
            return order.companyName.toLowerCase().includes(value.toLowerCase());
          case "client":
            return order.client.name.toLowerCase().includes(value.toLowerCase());
          case "date":
            return date ? order.dob?.toDateString() === date.toDateString() : true;
          default:
            return true;
        }
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
