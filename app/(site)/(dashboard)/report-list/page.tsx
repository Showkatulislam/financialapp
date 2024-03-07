import { GetReports } from "@/app/actions/GetReports";
import { TableContainer } from "./component/table-container";
const page = async () => {
  let reports: any;
  try {
    const fetchedReports = await GetReports();
    if (fetchedReports) {
      reports = fetchedReports;
    }
  } catch (error) {
    console.error("Error fetching reports:", error);
  }
  return (
    <TableContainer reports={reports}/>
  );
};

export default page;
