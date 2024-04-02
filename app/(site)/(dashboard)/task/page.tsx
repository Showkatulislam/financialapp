import { getallTask } from "@/app/actions/get-task";
import { AllTaskTable } from "./components/all-task-table";
const page = async () => {
  const taskData =getallTask()
  const [task] = await Promise.all([taskData]); 
  console.log(task)
  return (
    <div>
      <AllTaskTable task={task} />
    </div>
  );
};

export default page;
