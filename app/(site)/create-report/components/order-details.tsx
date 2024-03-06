import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";
import { languages, priority } from "@/public/dropdownData";
import { Client } from "@prisma/client";
import { useState } from "react";
interface reportProps {
  clients: Client[];
}
export const OrderDetail = ({ clients }: reportProps) => {
  const [client, __] = useState(clients);
  const { setTextField, report } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title="Order Details" />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={report.client}
          setValue={setTextField}
          name="client"
          placeholder="Client"
          type3Items={clients}
          type3={true}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="object"
          name="object"
          value={report.object}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Reference"
          name="reference"
          value={report.reference}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={report.priority}
          setValue={setTextField}
          name="priority"
          placeholder="Priority"
          items={priority}
          type1={true}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={report.language}
          setValue={setTextField}
          name="language"
          placeholder="Language"
          items={languages}
          type1={true}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Credit Requested"
          name="creditRequested"
          value={report.creditRequested}
        />
      </div>
    </div>
  );
};
