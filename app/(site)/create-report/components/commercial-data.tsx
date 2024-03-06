import TextField from "@/app/components/inputs/TextField";
import Title from "@/components/Title";
import { ReportState } from "@/hooks/ReportState";

const CommercialData = () => {
  const { report, setTextField } = ReportState();
  return (
    <div className="flex flex-col space-y-3 col-span-12 border p-2">
      <Title title="Commercial Data" />
      <TextField
        name="importText"
        placeholder="importText"
        setValue={setTextField}
        value={report.importText}
      />
      <TextField
        name="suppliersLocal"
        placeholder="suppliers Local"
        setValue={setTextField}
        value={report.suppliersLocal}
      />
      <TextField
        name="exportText"
        placeholder="export Text"
        setValue={setTextField}
        value={report.exportText}
      />
      <TextField
        name="clientsLocal"
        placeholder="Clients Local"
        setValue={setTextField}
        value={report.clientsLocal}
      />
    </div>
  );
};

export default CommercialData;
