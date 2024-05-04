import DropDownField from "@/app/share//inputs/Dropdown";
import InputField from "@/app/share//inputs/InputFields";
import TextField from "@/app/share/inputs/TextField";
import { CL } from "@/app/utils/change-language";
import Title from "@/components/Title";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { currency, legalStateMenu } from "@/public/dropdownData";

export const OfficialCompanyData = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title={CL("OfficialCompanyData")} />
      </div>
      <div className="col-span-6">
        <DropDownField
          setValue={setTextField}
          placeholder={CL("legalStatus")}
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
          placeholder={CL("uniqueIdentifier")}
          name="uniqueIdentifier"
          value={report.uniqueIdentifier}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="date"
          placeholder={CL("CreationDate")}
          name="creationData"
          value={report.creationData.toLocaleString()}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="date"
          placeholder={CL("Startofactivity")}
          name="startOfActivity"
          value={report.startOfActivity.toLocaleString()}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="Sharecapital"
          placeholder={CL("Sharecapital")}
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
          placeholder={CL("SharecapitalValue")}
          name="Sharecapitaltext"
          value={report.Sharecapitaltext}
        />
      </div>
      <div className="col-span-2">
        <DropDownField
          name="preShareCapital"
          placeholder={CL("preSharecapital")}
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
          placeholder={CL("preSharecapitalValue")}
          name="preShareCapitaltext"
          value={report.preShareCapitaltext}
        />
      </div>
      <div className="col-span-12">
      <TextField
          name="OfficialCompanyDatacmd"
          placeholder="Comment"
          setValue={setTextField}
          value={report.OfficialCompanyDatacmd}
        />
      </div>
    </div>
  );
};
