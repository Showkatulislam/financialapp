import Container from "@/app/components/Container"
import Adduser from "./components/add-user";

const page = () => {
    return (
        <Container title="Add User" description="">
            <Adduser/>
        </Container>
    );
};

export default page;