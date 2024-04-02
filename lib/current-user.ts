import { auth } from "@clerk/nextjs"
import { db } from "./db";

const currentProfile = async () => {
    const { userId } = auth()
    if (!userId) {
        return null;
    }
    const profile = await db.user.findUnique({
        where: {
            userId: userId as string
        }
    })
    return profile
}

export default currentProfile