import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { orderId: string } }
) {
  try {
    const body = await req.json();
    const newTask = await db.order.update({
      where: {
        id: params.orderId
      },
      data: {
        progress: "Complete",
      },
    });
    return NextResponse.json(newTask);
  } catch (error) {
    console.log("Error comming from task post", { error });
    return new NextResponse("Internal error", { status: 501 });
  }
}
