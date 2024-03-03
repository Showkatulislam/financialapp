import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";
import { currency, legalStateMenu } from "@/public/dropdownData";

export const OfficialCompanyData = () => {
  const { officaldata, setofficailinfo } = useReportStore();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title="Official Company Data" />
      </div>
      <div className="col-span-6">
        <DropDownField
          setValue={setofficailinfo}
          placeholder="legal Status"
          name="legalStatus"
          value={officaldata.legalStatus}
          type1={true}
          items={legalStateMenu}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setofficailinfo}
          type="text"
          placeholder="Unique Identifier"
          name="uniqueIdentifier"
          value={officaldata.uniqueIdentifier}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setofficailinfo}
          type="text"
          placeholder="Creation Data"
          name="creationData"
          value={officaldata.creationData}
        />
      </div>
      <div className="col-span-12">
        <InputField
          setValue={setofficailinfo}
          type="text"
          placeholder="Activity Status"
          name="activityStatus"
          value={officaldata.activityStatus}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="Sharecapital"
          placeholder="Sharecapital"
          setValue={setofficailinfo}
          value={officaldata.Sharecapital}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-4">
        <InputField
          setValue={setofficailinfo}
          type="number"
          placeholder="Share capital"
          name="Sharecapitaltext"
          value={officaldata.Sharecapitaltext}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="preShareCapital"
          placeholder="pre"
          setValue={setofficailinfo}
          value={officaldata.preShareCapital}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-4">
        <InputField
          setValue={setofficailinfo}
          type="number"
          placeholder="pre Capital"
          name="preShareCapitaltext"
          value={officaldata.preShareCapitaltext}
        />
      </div>
    </div>
  );
};
