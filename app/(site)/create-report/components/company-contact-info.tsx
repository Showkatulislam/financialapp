import InputField from "@/app/share//inputs/InputFields";
import Title from "@/components/Title";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

export const CompanyContactInfo = () => {
  const { report, setTextField } = ReportState();
  const {LAN}=useLanguage()
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12">
        <Title title={`${LAN=="EN"?dic.companyinfo[0]:dic.companyinfo[1]}`} />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.denomination[0]:dic.denomination[1]}`}
          name="Denomination"
          value={report.Denomination}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.address[0]:dic.address[1]}`}
          name="address"
          value={report.address}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="email"
          placeholder={`${LAN=="EN"?dic.email[0]:dic.email[1]}`}
          name="email"
          value={report.email}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.Fax[0]:dic.Fax[1]}`}
          name="fax"
          value={report.fax}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.Mobile[0]:dic.Mobile[1]}`}
          name="mobile"
          value={report.mobile}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.Telephone[0]:dic.Telephone[1]}`}
          name="tel"
          value={report.tel}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.nif[0]:dic.nif[1]}`}
          name="nif"
          value={report.nif}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.nis[0]:dic.nis[1]}`}
          name="nis"
          value={report.nis}
        />
      </div>
      <div className="col-span-12">
        <InputField
          setValue={setTextField}
          type="text"
          placeholder={`${LAN=="EN"?dic.Website[0]:dic.Website[1]}`}
          name="website"
          value={report.website}
        />
      </div>
    </div>
  );
};
