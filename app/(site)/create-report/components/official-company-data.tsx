import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";
import { currency, legalStateMenu } from "@/public/dropdownData";

export const OfficialCompanyData = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title="Official Company Data" />
      </div>
      <div className="col-span-6">
        <DropDownField
          setValue={setTextField}
          placeholder="legal Status"
          name="legalStatus"
          value={report.legalStatus}
          type1={true}
          items={legalStateMenu}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Unique Identifier"
          name="uniqueIdentifier"
          value={report.uniqueIdentifier}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="date"
          placeholder="Creation Data"
          name="creationData"
          value={report.creationData.toLocaleString()}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="date"
          placeholder="Start of activity"
          name="startOfActivity"
          value={report.startOfActivity.toLocaleString()}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="Sharecapital"
          placeholder="Sharecapital"
          setValue={setTextField}
          value={report.Sharecapital}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-4">
        <InputField
          setValue={setTextField}
          type="number"
          placeholder="Share capital"
          name="Sharecapitaltext"
          value={report.Sharecapitaltext}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="preShareCapital"
          placeholder="pre"
          setValue={setTextField}
          value={report.preShareCapital}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-4">
        <InputField
          setValue={setTextField}
          type="number"
          placeholder="pre Capital"
          name="preShareCapitaltext"
          value={report.preShareCapitaltext}
        />
      </div>
    </div>
  );
};
