import prisma from "@/lib/prisma";
import ComicsModel from "../../../../model/comics";

export async function GET(request: Request) {
  const comics = await ComicsModel.find();
  return new Response(JSON.stringify(comics), { status: 200 });
}
