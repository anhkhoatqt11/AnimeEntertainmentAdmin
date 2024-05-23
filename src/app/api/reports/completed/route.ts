import prisma from "@/lib/prisma";
import ReportModel from "../../../../model/userReports";
import mongoose from "mongoose";
export async function POST(req: Request) {
  const body = await req.json();
  const completedId = body.completedId;
  var updatedRecord = await ReportModel.updateOne(
    { _id: completedId },
    {
      $set: {
        status: "completed",
      },
    }
  );
  if (updatedRecord) {
    return new Response(JSON.stringify(updatedRecord), { status: 200 });
  }
}
