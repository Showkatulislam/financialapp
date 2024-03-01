import { GetReports } from "@/app/actions/GetReports";
import Container from "@/app/components/Container";
import { ReportDataTable } from "./component/data-table";
import { columns } from "./component/columns";
const page = async() => {
    const reports=await GetReports();  
    console.log(reports)
    return (
       <Container
       title="Report"
       >
        <ReportDataTable data={reports??[]} columns={columns} />
       </Container>
    );
};

export default page;