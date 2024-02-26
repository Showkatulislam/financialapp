import Container from "@/app/components/Container"
import { DataTableDemo } from "@/app/components/dataTable/DataTable";

const page=()=>{
    return (
    <Container title="User List" description="">
        <DataTableDemo/>
    </Container>
    )
}

export default page;