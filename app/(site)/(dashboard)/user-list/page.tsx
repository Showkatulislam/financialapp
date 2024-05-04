import Container from "@/app/share//Container";
import { UserDataTable } from "./component/data-table";
import { columns } from "./component/columns";
import { getAllUser } from "@/app/actions/getAllUser";
import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";
const page = async () => {
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  const user = await getAllUser();
  console.log(user);

  return (
    <Container title="User list">
      <UserDataTable columns={columns} data={user} />
    </Container>
  );
};

export default page;
