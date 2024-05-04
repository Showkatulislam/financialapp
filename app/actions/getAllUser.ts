import { db } from "@/lib/db";
import getCurrentUser from "./get-user";
export const getAllUser = async () => {
  const Iam = await getCurrentUser();
  try {
    const users = await db.user.findMany({
      where: {
        NOT: {
          email: Iam?.email,
        },
      },
    });
    console.log("user", users);
    return users;
  } catch (error) {
    console.log(error);

    return [];
  }
};
