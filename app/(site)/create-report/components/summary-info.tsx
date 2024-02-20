import DropDownField from "@/app/components/inputs/Dropdown";
import InputField from "@/app/components/inputs/InputFields";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";
import { Payments, currency, riskRating } from "@/public/dropdownData";

export const SummaryInfo = () => {
    const {summeryinfo,setsummeryinfo}=useReportStore()
  return (
    <>
      <div className="col-span-12">
        <Title title="SUMMARY" />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="riskRating"
          placeholder="Risk Rating"
          setValue={setsummeryinfo}
          type1={true}
          items={riskRating}
          value={summeryinfo.riskRating}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="paymentExperience"
          placeholder="Paymen tExperience"
          type1={true}
          setValue={setsummeryinfo}
          items={Payments}
          value={summeryinfo.paymentExperience}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="recommendCredit"
          placeholder="recommend Credit"
          setValue={setsummeryinfo}
          value={summeryinfo.recommendCredit}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setsummeryinfo}
          type="text"
          placeholder="recommend Credit text"
          name="recommendCreditText"
          value={summeryinfo.recommendCreditText}
        />
      </div>
      <div className="col-span-6">
        <DropDownField
          name="equivalentToCredit"
          placeholder="equivalentToCredit"
          setValue={setsummeryinfo}
          value={summeryinfo.equivalentToCredit}
          type1={true}
          items={currency}
        />
      </div>
      <div className="col-span-6">
        <InputField
          setValue={setsummeryinfo}
          type="text"
          placeholder="equivalent To Credit text"
          name="equivalentToCreditText"
          value={summeryinfo.equivalentToCreditText}
        />
      </div>
    </>
  );
};
