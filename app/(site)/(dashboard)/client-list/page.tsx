import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/components/Container";
import { ClientDataTable } from "./component/data-table";
import { columns } from "./component/columns";

const page = async () => {
  const clients = await GetClient();
  return (
    <Container title="Client list">
      <ClientDataTable columns={columns} data={clients} />
    </Container>
  );
};

export default page;
