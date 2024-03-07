import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function  PATCH(
    request:Request,
    {params}:{params:{userId:string}}
){
    const body=await request.json()
    const {role}=body
    try {
        const user=await db.user.update({
            where:{
                id:params.userId
            },
            data:{
                role:role
            }
        })

        return NextResponse.json(user)
        
    } catch (error) {
        console.log('SERVER ID PATCH',error);
        return new NextResponse("Internal Error",{status:500})

        
    }
}