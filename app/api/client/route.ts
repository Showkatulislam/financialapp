import getCurrentUser from "@/app/actions/get-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const client = await db.client.findMany({});
    return NextResponse.json(client);
  } catch (error) {
    console.log("Error Comming From Client GET", { error });
    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
export async function POST(req: Request) {
  try {
    const Iam = await getCurrentUser();
    const body = await req.json();
    const { name, email, phone, address, contact1, contact2 } = body;
    if (!Iam) {
      return new NextResponse("UnAuthorized User", { status: 404 });
    }
    console.log(name);

    const client = await db.client.create({
      data: {
        name,
        email,
        phone,
        address,
        contact1,
        contact2,
      },
    });

    return NextResponse.json(client);
  } catch (error) {
    console.log("Error Come From Client");
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, address, contact1, contact2 } = body;
    const Iam = await getCurrentUser();
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId") as string;

    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    console.log(name, email, phone, address, contact1, contact2);

    const clients = await db.client.update({
      where: {
        id: clientId ?? undefined,
      },
      data: {
        name,
        email,
        phone,
        address,
        contact1,
        contact2,
      },
    });
    return NextResponse.json(clients);
  } catch (error) {
    console.log("Error Come From Client");
    return new NextResponse("Internal Error", { status: 501 });
  }
}

export async function DELETE(req: Request) {
  try {
    const Iam = await getCurrentUser();
    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId") as string;
    console.log(clientId);

    const client = await db.client.delete({
      where: {
        id: clientId ?? undefined,
      },
      include: {
        orders: true,
      },
    });
    return NextResponse.json(client);
  } catch (error) {
    console.log("Error Come From Client", error);
    return new NextResponse("Internal Error email should be unique", {
      status: 501,
    });
  }
}
