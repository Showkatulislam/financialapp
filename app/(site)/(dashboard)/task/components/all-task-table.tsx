import Container from "@/app/share//Container"
import { TaskDataTable } from "./table-data"
import { columns } from "./column"
interface Props{
    task:any
}
export const AllTaskTable=({task}:Props)=>{
    return (
        <Container title="Tasks">
          <TaskDataTable data={task} columns={columns}/>
        </Container>
    )
}