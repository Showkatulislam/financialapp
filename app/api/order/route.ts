import getCurrentUser from "@/app/actions/get-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  try {
    const orders = await db.order.findMany();
    return NextResponse.json(orders);
  } catch (error) {
    console.log("Error coming from order route");
    return new NextResponse("Internal Error", { status: 501 });
  }
}
export async function POST(req: Request) {
  try {
    const Iam = await getCurrentUser()
    if (!Iam) {
      return new NextResponse("Unathorize User", { status: 501 });
    }
    const body = await req.json();
    const { clientId, productId, dob, priority, companyName, userId } = body;
    const order = await db.order.create({
      data: {
        clientId,
        productId,
        dob,
        priority,
        companyName,
        userId,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log("Error coming from order route");
    return new NextResponse("Internal Error", { status: 501 });
  }
}
export async function PATCH(req: Request) {
  try {
    const Iam = await getCurrentUser()
    if (!Iam) {
      return new NextResponse("Unathorize User", { status: 501 });
    }
    const body = await req.json();
    const { clientId, productId, dob, priority } = body;
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId") as string;
    const order = await db.order.update({
      where: {
        id: orderId ?? undefined,
      },
      data: {
        clientId,
        productId,
        dob,
        priority,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log("Error Come From order", error);
    return new NextResponse("Internal Error", { status: 501 });
  }
}

export async function DELETE(req: Request) {
  try {
    const Iam = await getCurrentUser()
    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId") as string;
    const order = await db.order.delete({
      where: {
        id: orderId ?? undefined,
      },
      include: {
        client: true,
        product: true,
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log("Error coming from Order route");

    return new NextResponse("Internal Error", { status: 501 });
  }
}
