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
      data: task,
    });
    return NextResponse.json(newTask);
  } catch (error) {
    console.log("Error comming from task post");
    return new NextResponse("Internal error", { status: 501 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = (await searchParams.get("taskId")) as string;
    console.log("dddddddddd",taskId);

    const res = await db.task.delete({
      where: {
        id: taskId,
      },
    });
    if (!res) {
      console.log("Task Not Delete");
    }
    return NextResponse.json(res);
  } catch (error) {
    console.log("Error comming from Task delete route", { error });
    return new NextResponse("Internal server Error", { status: 501 });
  }
}
export async function PATCH(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = (await searchParams.get("taskId")) as string;
    const body = await req.json();
    const newTask = await db.task.update({
      where:{
        id:taskId
      },
      data:{
        progress:"Complete"
      }
    })
    return NextResponse.json(newTask);
  } catch (error) {
    console.log("Error comming from task post",{error});
    return new NextResponse("Internal error", { status: 501 });
  }
}