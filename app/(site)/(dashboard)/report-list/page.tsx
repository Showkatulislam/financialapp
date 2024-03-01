import { GetReports } from "@/app/actions/GetReports";
const page = async() => {
    const reports=await GetReports();  
    return (
        <div>
           
        </div>
    );
};

export default page;