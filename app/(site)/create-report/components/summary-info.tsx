import DropDownField from "@/app/share//inputs/Dropdown";
import InputField from "@/app/share//inputs/InputFields";
import { CL } from "@/app/utils/change-language";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";
import { Payments, currency, riskRating } from "@/public/dropdownData";

export const SummaryInfo = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12 p-2 border">
        <Title title={CL("summary")} />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="riskRating"
          placeholder={CL("riskRating")}
          setValue={setTextField}
          type1={true}
          items={riskRating}
          value={report.riskRating}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="paymentExperience"
          placeholder={CL("paymentExperience")}
          type1={true}
          setValue={setTextField}
          items={Payments}
          value={report.paymentExperience}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="recommendCredit"
          placeholder={CL("recommendCredit")}
          setValue={setTextField}
          value={report.recommendCredit}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="number"
          placeholder={CL("recommendCredit")}
          name="recommendCreditText"
          value={report.recommendCreditText}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="equivalentToCredit"
          placeholder={CL("equivalentToCredit")}
          setValue={setTextField}
          value={report.equivalentToCredit}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setTextField}
          type="number"
          placeholder="equivalent To Credit"
          name="equivalentToCreditText"
          value={report.equivalentToCreditText}
        />
      </div>
    </div>
  );
};
