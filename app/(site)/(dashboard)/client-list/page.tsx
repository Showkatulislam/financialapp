import Title from "@/components/Title";
import { ClientList } from "./client-list";
import { GetClient } from "@/app/actions/get-client";

const page =async () => {
    const clients=await GetClient()
    return (
        <div className="h-full flex justify-center items-center">
        <div className="max-w-5xl">
          <Title title="Client List"/>
          <ClientList clients={clients}/>
        </div>
      </div>
    );
};

export default page;