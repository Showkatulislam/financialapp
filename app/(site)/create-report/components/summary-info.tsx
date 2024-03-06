import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";
import { Payments, currency, riskRating } from "@/public/dropdownData";

export const SummaryInfo = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="col-span-12 grid grid-cols-12 gap-2 border p-2 space-y-2">
      <div className="col-span-12 p-2 border">
        <Title title="SUMMARY" />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="riskRating"
          placeholder="Risk Rating"
          setValue={setTextField}
          type1={true}
          items={riskRating}
          value={report.riskRating}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="paymentExperience"
          placeholder="Paymen tExperience"
          type1={true}
          setValue={setTextField}
          items={Payments}
          value={report.paymentExperience}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="recommendCredit"
          placeholder="recommend Credit"
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
          placeholder="recommend Credi"
          name="recommendCreditText"
          value={report.recommendCreditText}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="equivalentToCredit"
          placeholder="equivalentToCredit"
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
