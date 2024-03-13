import { db } from "@/lib/db";

export const getallTask = async () => {
  try {
    const task = await db.task.findMany({
      include: {
        client: true,
        order: true,
        user: true,
      },
    });
    return task;
  } catch (error) {
    return [];
  }
};
