import TextField from "@/app/components/inputs/TextField";
import Title from "@/components/Title";
import { useReportStore } from "@/hooks/useReportStore";

const CommercialData = () => {
  const {
    commercialdata,
    setCommercialData
  } = useReportStore();
  return (
    <div className="flex flex-col space-y-2 col-span-12 border p-2">
      <Title title="Commercial Data"/>
      <TextField
        name="importText"
        placeholder="importText"
        setValue={setCommercialData}
        value={commercialdata.importText}
      />
      <TextField
        name="suppliersLocal"
        placeholder="suppliers Local"
        setValue={setCommercialData}
        value={commercialdata.suppliersLocal}
      />
      <TextField
        name="exportText"
        placeholder="export Text"
        setValue={setCommercialData}
        value={commercialdata.exportText}
      />
      <TextField
        name="clientsLocal"
        placeholder="Clients Local"
        setValue={setCommercialData}
        value={commercialdata.clientsLocal}
      />
    </div>
  );
};

export default CommercialData;
