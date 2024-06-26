import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/share//Container";
import { ClientDataTable } from "./component/data-table";
import { columns } from "./component/columns";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";


const page = async () => {
  const clientData =GetClient();
  const [clients]=await Promise.all([clientData])
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
    <Container title="Client list" className="w-full max-w-7xl">
      <ClientDataTable columns={columns} data={clients} />
    </Container>
  );
};

export default page;
