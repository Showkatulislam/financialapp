import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";
import { priority } from "@/public/dropdownData";
import { Client } from "@prisma/client";
import { useState } from "react";
interface reportProps{
  clients:Client[]
}
export const OrderDetail = ({clients}:reportProps) => {
  const [client,__]=useState(clients)
  const { orderdetail, setOrderinfo } = useReportStore();
  return (
    <>
      <div className="col-span-12">
        <Title title="Order Details" />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={orderdetail.client}
          setValue={setOrderinfo}
          name="client"
          placeholder="Client"
          type3Items={clients}
          type3={true}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setOrderinfo}
          type="text"
          placeholder="object"
          name="object"
          value={orderdetail.object}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setOrderinfo}
          type="text"
          placeholder="Reference"
          name="reference"
          value={orderdetail.reference}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={orderdetail.priority}
          setValue={setOrderinfo}
          name="priority"
          placeholder="Priority"
          items={priority}
          type1={true}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setOrderinfo}
          type="text"
          placeholder="Language"
          name="language"
          value={orderdetail.language}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setOrderinfo}
          type="text"
          placeholder="Credit Requested"
          name="creditRequested"
          value={orderdetail.creditRequested}
        />
      </div>
    </>
  );
};
