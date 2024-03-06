import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";

export const CompanyContactInfo = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title="Company Information" />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Denomination"
          name="Denomination"
          value={report.Denomination}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Address"
          name="address"
          value={report.address}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="email"
          placeholder="Email"
          name="email"
          value={report.email}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Fax"
          name="fax"
          value={report.fax}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Mobile"
          name="mobile"
          value={report.mobile}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Telephone"
          name="tel"
          value={report.tel}
        />
      </div>
      <div className="col-span-12">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder="Website"
          name="website"
          value={report.website}
        />
      </div>
    </div>
  );
};
