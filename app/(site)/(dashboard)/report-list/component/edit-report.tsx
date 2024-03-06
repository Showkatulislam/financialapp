import { Reportform } from "@/app/(site)/create-report/components/report-form";
import { ReportState } from "@/hooks/ReportState";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import qs from 'query-string'
import { Button } from "@/components/ui/button";
interface reportprops {
  initialReport: any;
}
export const EditReport = ({ initialReport }: reportprops) => {
  const { setReport,report} = ReportState();
  const [loading,setLoading]=useState(false)
  const [client, setclient] = useState([]);
  const router=useRouter()
  useEffect(() => {
    setReport(initialReport.report);
    const fetchClient = async () => {
      const data = await axios.get("/api/client");
      setclient(data.data);
    };
    fetchClient();
  }, [setReport,initialReport]);
  const UpdateReport = async () => {
    setLoading(true);
    try {
      const url = qs.stringifyUrl({
        url: `/api/report`,
        query: {
          reportId:initialReport.id
        },
      });
      await axios.patch(url, {report:report});
      toast.success("report Update successfullly");
      router.refresh();
    } catch (error) {
      toast.error("Report not add at Database");
    } finally {
      router.refresh();
      setLoading(false);
    }
  };
  return (
    <div className="max-w-4xl">
      <Reportform clients={client} />
      <Button onClick={UpdateReport}>
        {loading?"Updating ...":"Update"}
      </Button>
    </div>
  );
};
