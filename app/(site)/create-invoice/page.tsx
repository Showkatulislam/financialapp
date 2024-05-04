import getCurrentUser from "@/app/actions/get-user";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const Iam = await getCurrentUser();
  if (Iam?.role != "ADMIN") {
    redirect("/dashboard");
  }
  return (
    <div className="h-full flex flex-col space-y-2 justify-center items-center">
      <p className="text-3xl font-bold">Inovice not create Yet.</p>
      <Button>
        <Link href="/dashboard">Back go</Link>
      </Button>
    </div>
  );
};

export default page;
