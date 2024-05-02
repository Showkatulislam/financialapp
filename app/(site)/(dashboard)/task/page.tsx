import { getallTask } from "@/app/actions/get-task";
import { AllTaskTable } from "./components/all-task-table";
const page = async () => {
  const task = await getallTask();
  console.log(task);
  return (
    <div>
      <AllTaskTable task={task} />
    </div>
  );
};

export default page;
