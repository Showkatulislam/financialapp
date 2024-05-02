import { db } from "@/lib/db"
export const getAllUser=async()=>{
    try {
        const users = await db.user.findMany()
        console.log("user",users);
        return users
    } catch (error) {
        console.log(error);
        
        return []
    }
}