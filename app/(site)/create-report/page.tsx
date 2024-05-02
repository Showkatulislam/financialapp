import { Reportpreview } from "@/app/components/report/report-preview";
import { Reportform } from "./components/report-form";
import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/get-user";

const page = async () => {
  const clientData = GetClient();
  const [clients]=await Promise.all([clientData])
  const Iam=await getCurrentUser()
  return (
    <div className="flex h-full overflow-hidden ">
      <div className="w-1/2">
        <Reportform clients={clients} />
      </div>
      <div className="w-1/2 ">
        <Container title="Report demo">
          <Reportpreview Iam={Iam} />
        </Container>
      </div>
    </div>
  );
};

export default page;
