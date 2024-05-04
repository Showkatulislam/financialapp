import DropDownField from "@/app/share//inputs/Dropdown";
import InputField from "@/app/share//inputs/InputFields";
import Title from "@/components/Title";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";
import { languages, priority } from "@/public/dropdownData";
import { Client } from "@prisma/client";
import { useState } from "react";
interface reportProps {
  clients: Client[];
}
export const OrderDetail = ({ clients }: reportProps) => {
  const [client, __] = useState(clients);
  const { setTextField, report } = ReportState();
  const { LAN, setLanguage } = useLanguage();
  console.log(LAN);

  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title={`${LAN == "EN" ? dic.orderdetail[0] : dic.orderdetail[1]}`} />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={report.client}
          setValue={setTextField}
          name="client"
          placeholder={`${LAN == "EN" ? dic.client[0] : dic.client[1]}`}
          type3Items={clients}
          type3={true}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN == "EN" ? dic.object[0] : dic.object[1]}`}
          name="object"
          value={report.object}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN == "EN" ? dic.reference[0] : dic.reference[1]}`}
          name="reference"
          value={report.reference}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          value={report.priority}
          setValue={setTextField}
          name="priority"
          placeholder={`${LAN == "EN" ? dic.priority[0] : dic.priority[1]}`}
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
          handleClick={setLanguage}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN == "EN" ? dic.creditRequested[0] : dic.creditRequested[1]}`}
          name="creditRequested"
          value={report.creditRequested}
        />
      </div>
    </div>
  );
};
