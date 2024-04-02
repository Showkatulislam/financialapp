import { Reportpreview } from "@/app/components/report/report-preview";
import { Reportform } from "./components/report-form";
import { GetClient } from "@/app/actions/get-client";
import Container from "@/app/components/Container";

const page = async () => {
  const clientData = GetClient();
  const [clients]=await Promise.all([clientData])
  return (
    <div className="h-full flex">
      <div className="w-1/2">
        <Reportform clients={clients} />
      </div>
      <div className="w-1/2 ">
        <Container title="Report demo">
          <Reportpreview />
        </Container>
      </div>
    </div>
  );
};

export default page;
