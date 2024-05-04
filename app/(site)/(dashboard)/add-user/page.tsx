import Container from "@/app/share//Container"
import Adduser from "./components/add-user";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";

const page =async () => {
    const Iam = await getCurrentUser();
    if (Iam?.role != "ADMIN") {
      redirect("/dashboard");
    }
    return (
        <Container title="Add User" >
            <Adduser/>
        </Container>
    );
};

export default page;