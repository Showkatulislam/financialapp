import Container from "@/app/share//Container"
import Adduser from "./components/add-user";

const page = () => {
    return (
        <Container title="Add User" >
            <Adduser/>
        </Container>
    );
};

export default page;