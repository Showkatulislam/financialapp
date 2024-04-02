import { GetReports } from "@/app/actions/GetReports";
import { TableContainer } from "./component/table-container";
const page = async () => {
  const reportdata=GetReports()
  const [reports]=await Promise.all([reportdata])
  return (
    <TableContainer reports={reports}/>
  );
};

export default page;
