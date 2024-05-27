import prisma from "@/lib/prisma";
import ChallengesModel from "@/model/challenges";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const body = await req.json();

  const challenge = await ChallengesModel.updateMany(
    {},
    {
      $set: {
        challengeName: body.challengeName,
        endTime: body.endTime,
      },
    },
    {
      //options
      returnNewDocument: true,
      new: true,
      strict: false,
    }
  );
  if (challenge) {
    return new Response(JSON.stringify(challenge), { status: 200 });
  }
}
