import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mydata } = body;
    console.log(mydata);

    const report = await db.report.create({
      data: {
        report: mydata,
        companyName:mydata.companyName
      },
    });
    return NextResponse.json(report);
  } catch (error) {
    console.log("Error Come From Report Error", error);
    return new NextResponse("Error", { status: 501 });
  }
}
export async function GET(req: Request) {
  try {
    const reports = await db.report.findMany({});
    return NextResponse.json(reports);
  } catch (error) {
    console.log("Error Comming From Report Get Route", error);
    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const reportId = (await searchParams.get("reportId")) as string;
    const reports = await db.report.delete({
      where: {
        id: reportId,
      },
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.log("Error Comming From Report Get Route", error);
    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
