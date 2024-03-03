import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";

export const CompanyContactInfo = () => {
  const { companydetail, setcompanyinfo } = useReportStore();
  return (
      <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
        <div className="col-span-12">
          <Title title="Company Information" />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Denomination"
            name="Denomination"
            value={companydetail.Denomination}
          />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Address"
            name="address"
            value={companydetail.address}
          />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="email"
            placeholder="Email"
            name="email"
            value={companydetail.email}
          />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Fax"
            name="fax"
            value={companydetail.fax}
          />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={companydetail.mobile}
          />
        </div>
        <div className="col-span-6">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Telephone"
            name="tel"
            value={companydetail.tel}
          />
        </div>
        <div className="col-span-12">
          <InputField
            setValue={setcompanyinfo}
            type="text"
            placeholder="Website"
            name="website"
            value={companydetail.website}
          />
        </div>
      </div>
  );
};
