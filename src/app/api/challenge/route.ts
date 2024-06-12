
import connectMongoDB from "@/lib/mongodb";
import prisma from "@/lib/prisma";
import ChallengesModel from "@/model/challenges";

export async function GET(request: Request) {
  connectMongoDB();
  const questions = await ChallengesModel.find();
  return new Response(JSON.stringify(questions[0]), { status: 200 });
}
