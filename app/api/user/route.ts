import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;
    const user = await db.user.create({
      data: {
        name,
        email,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User Route");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
