import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";

const page = async() => {
    const Iam = await getCurrentUser();
    if (Iam?.role != "ADMIN") {
      redirect("/dashboard");
    }
    return (
        <div>
            <p> Admin list </p>
        </div>
    );
};

export default page;