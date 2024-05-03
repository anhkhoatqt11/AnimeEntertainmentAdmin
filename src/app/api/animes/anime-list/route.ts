import prisma from "@/lib/prisma";
import AnimesModel from "../../../../model/animes";

export async function GET(request: Request) {
  const animes = await AnimesModel.find();
  return new Response(JSON.stringify(animes), { status: 200 });
}
