import Container from "@/app/share//Container";
import { UserDataTable } from "./component/data-table";
import { columns } from "./component/columns";
import { getAllUser } from "@/app/actions/getAllUser";
const page = async () => {
  const user = await getAllUser();
  console.log(user);

  return (
    <Container title="User list">
      <UserDataTable columns={columns} data={user} />
    </Container>
  );
};

export default page;
