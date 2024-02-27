import Title from "@/components/Title";
import { ClientList } from "./client-list";
import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/components/Container";

const page =async () => {
    const clients=await GetClient()
    return (
      <Container
      title="Client list"
     
      >
        <ClientList clients={clients}/>
      </Container>
    );
};

export default page;