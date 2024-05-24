import prisma from "@/lib/prisma";
import UsersModel from "../../../../model/users";
import mongoose from "mongoose";
export async function POST(req: Request) {
  const body = await req.json();

  const users = await UsersModel.updateMany(
    {},
    {
      $push: {
        notifications: {
          sourceId: new mongoose.Types.ObjectId(body.sourceId),
          type: body.type,
          content: body.content,
          status: "sent",
          sentTime: new Date(),
        },
      },
    },
    {
      //options
      returnNewDocument: true,
      new: true,
      strict: false,
    }
  );
  if (users) {
    return new Response(JSON.stringify(users), { status: 200 });
  }
}
