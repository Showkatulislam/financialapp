import { getServerSession } from "next-auth";

import { authOption } from "./auth"; 

export default async function getSession(){
    return await getServerSession(authOption)
}