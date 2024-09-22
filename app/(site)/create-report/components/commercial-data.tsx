import TextField from "@/app/share//inputs/TextField";
import Title from "@/components/Title";
import { dic } from "@/dictionaries";
import { ReportState } from "@/hooks/ReportState";
import { useLanguage } from "@/hooks/UseLanguage";

const CommercialData = () => {
  const { report, setTextField } = ReportState();
  const {LAN}=useLanguage()
  const index=LAN=="EN"?0:1
  return (
    <div className="flex flex-col space-y-3 col-span-12 border p-2">
      <Title title={dic.commercialDataTitle[index]} />
      <TextField
        name="import"
        placeholder={`${dic.Import[index]}`}
        setValue={setTextField}
        value={report.importText}
      />
      <TextField
        name="suppliersLocal"
        placeholder={dic.suppliersLocal[index]}
        setValue={setTextField}
        value={report.suppliersLocal}
      />
      <TextField
        name="exportText"
        placeholder={dic.export[index]}
        setValue={setTextField}
        value={report.exportText}
      />
      <TextField
        name="clientsLocal"
        placeholder={dic.clientsLocal[index]}
        setValue={setTextField}
        value={report.clientsLocal}
      />
    </div>
  );
};

export default CommercialData;
