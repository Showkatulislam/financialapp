import getCurrentUser from "@/app/actions/get-user";
import { redirect } from "next/navigation";


const page = async() => {
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
    <div className="h-full flex justify-center items-center">
      <p className="text-3xl font-bold">Inovice not create Yet.</p>
    </div>
  );
};

export default page;
