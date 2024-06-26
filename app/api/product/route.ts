import getCurrentUser from "@/app/actions/get-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const Iam = await getCurrentUser()
    const body = await request.json();
    const { productName, country, language, price } = body;
    if (!Iam) {
      return new NextResponse("Unothorized", { status: 401 });
    }
    const product = await db.product.create({
      data: {
        productName,
        country,
        language,
        price,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error Come From Product");
    return new NextResponse("Internal Error", { status: 501 });
  }
}

export async function GET(request: Request) {
  try {
    const Iam = await getCurrentUser()
    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    const products = await db.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.log("Error Come From Product");
    return new NextResponse("Internal Error", { status: 501 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { productName, country, language, price } = body;
    const Iam = await getCurrentUser()
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId") as string;

    if (!Iam) {
      return new NextResponse("UnAthorized User", { status: 401 });
    }
    const products = await db.product.update({
      where: {
        id: productId ?? undefined,
      },
      data: {
        productName,
        country,
        language,
        price,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log("Error Come From Product");
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
    const productId = searchParams.get("productId") as string
    const product = await db.product.delete({
      where: {
        id: productId ?? undefined,
      }
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 501 });
  }
}
