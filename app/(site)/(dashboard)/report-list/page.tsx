import { GetReports } from "@/app/actions/GetReports";
import Container from "@/app/components/Container";
import { ReportDataTable } from "./component/data-table";
import { columns } from "./component/columns";
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
    <Container title="Report">
      <ReportDataTable data={reports} columns={columns} />
    </Container>
  );
};

export default page;
