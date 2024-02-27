import { getUser } from "@/app/actions/get-user";
import Container from "@/app/components/Container";
import { DataTableDemo } from "@/app/components/dataTable/DataTable";

const page = async () => {
  const user = await getUser();
  console.log(user);
  return (
    <Container title="User List">
      <DataTableDemo />
    </Container>
  );
};

export default page;
