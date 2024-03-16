import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const user = await db.user.findMany();
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User GET Route", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;
    console.log(email,"this is email");
    
    const user = await db.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User Route", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") as string;
    const { name, email } = body;
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User Patch Route", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") as string;
    const user = await db.user.delete({
      where: {
        id: userId,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User Delete Route", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
