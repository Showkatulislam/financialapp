import getSession from "../utils/getSessiondata";
import { db } from "@/lib/db";
const getCurrentUser=async()=>{
    const session=await getSession();
    if(!session?.user?.email){
        return null;
    }
    try {
        const user=await db.user.findUnique({
            where:{
                email:session?.user?.email as string
            }
        })

        return user
    } catch (error) {
        return null;
    }
}

export default getCurrentUser