import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/components/Container";
import { ClientDataTable } from "./component/data-table";
import { columns } from "./component/columns";
import { promise } from "zod";

const page = async () => {
  const clientData =GetClient();
  const [clients]=await Promise.all([clientData])
  return (
    <Container title="Client list">
      <ClientDataTable columns={columns} data={clients} />
    </Container>
  );
};

export default page;
