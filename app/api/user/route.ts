import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function GET(req: Request) {
  try {
    const user = await db.user.findMany();
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error Comming From User GET Route", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    console.log(name, email, password);

    if (!name || !email || !password) {
      return  NextResponse.json({"message":"Name ,Email,Password any Missing"},{status:501})
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedpassword,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 501 });
  }
}
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") as string;
    const { name, email,password } = body;
    const user = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        name,
        password
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
