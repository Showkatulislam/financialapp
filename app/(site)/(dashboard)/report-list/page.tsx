import { GetReports } from "@/app/actions/GetReports";
import Report from "./components/Report";

const page = async() => {
    const reports=await GetReports();  
    return (
        <div>
           <Report report={reports}/>
        </div>
    );
};

export default page;