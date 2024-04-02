import { getUser } from "@/app/actions/get-user";
import Container from "@/app/components/Container";
import { UserDataTable } from "./component/data-table";
import { columns } from "./component/columns";
const page = async () => {
  const userData =getUser();
  const [user]=await Promise.all([userData])
  
  return (
    <Container title="User list">
        <UserDataTable columns={columns} data={user}/>
    </Container>
  );
};

export default page;
