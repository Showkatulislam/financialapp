import { getallTask } from "@/app/actions/get-task";
import { AllTaskTable } from "./components/all-task-table";
import { Task } from "./components/task";

const page = async() => {
    const task=await getallTask()
    return (
        <div>
            <Task/>
            <AllTaskTable task={task}/>
        </div>
    );
};

export default page;