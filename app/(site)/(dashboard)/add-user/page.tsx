import Container from "@/app/components/Container"
import Adduser from "./components/add-user";

const page = () => {
    return (
        <Container title="Add User" >
            <Adduser/>
        </Container>
    );
};

export default page;