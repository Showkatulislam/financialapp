import { getUser } from "@/app/actions/get-user";
import Container from "@/app/components/Container";
import { UserDataTable } from "./component.tsx/data-table";
import { columns } from "./component.tsx/columns";
const page = async () => {
  const user = await getUser();
  return (
    <Container title="User List">
        <UserDataTable columns={columns} data={user}/>
    </Container>
  );
};

export default page;
