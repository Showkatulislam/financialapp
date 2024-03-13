import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const task = await db.task.findMany();
    return NextResponse.json(task);
  } catch (error) {
    console.log("Error coming from Task Route.", { error });
    return new NextResponse("Internal Server Error,", { status: 501 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { task } = body;
    const newTask = await db.task.create({
      data:task
    });
    return NextResponse.json(newTask);
  } catch (error) {
    console.log("Error comming from task post");
    return new NextResponse("Internal error", { status: 501 });
  }
}
